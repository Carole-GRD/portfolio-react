import styles from "./Navbar.module.css";

import smallLogo from "../../assets/images/petitLogoCG.png";

import BurgerMenu from "./BurgerMenu";


export default function Navbar() {
    
    return (
        <nav>

            <ul>
                <li className={styles.logo}><a><img src={smallLogo} alt="Logo Carole Gérard avec un lien qui ramène à la page accueil" /></a></li>
                <li className={styles.navigationItem}><a>Dev Web</a></li>
            </ul>

            <BurgerMenu />

        </nav>
    );
};
