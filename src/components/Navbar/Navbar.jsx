import { useState } from "react";

import styles from "./Navbar.module.css";
import smallLogo from "../../assets/images/logo/petitLogoCG.png";

import BurgerMenu from "./BurgerMenu";

import scrollSmooth from "../../features/scrollSmooth";
import scrollSpy from "../../features/scollSpy";


export default function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        // Mettez à jour l'état pour inverser son état actuel
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (e) => {
        // Ferme le menu avant d'appeler scrollSmooth
        // setMenuOpen(!isMenuOpen);
        setMenuOpen(false);
        scrollSmooth(e);
        scrollSpy(e);
    };
    
    return (
        <nav>

            <ul>
                <li className={styles.logo}>
                    <a onClick={(e) => handleMenuItemClick(e)}>
                        <img src={smallLogo} alt="Logo Carole Gérard avec un lien qui ramène à la page accueil" />
                    </a>
                </li>
                <li className={styles.navigationItem}>
                    <a onClick={(e) => handleMenuItemClick(e)} className={styles.scrollSpy}>
                        Dev Web
                    </a>
                </li>
            </ul>

            <BurgerMenu 
                isMenuOpen={isMenuOpen}
                onMenuClick={handleMenuClick} 
                onItemClick={handleMenuItemClick} 
            />

        </nav>
    );
};
