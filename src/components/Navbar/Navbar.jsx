import styles from "./Navbar.module.css";

import smallLogo from "../../assets/icons/petitLogoCG.png";

import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li className={styles.logo}><a><img src={smallLogo} alt="Logo Carole Gérard avec un lien qui ramène à la page accueil" /></a></li>
                <li className={styles.navigationItem}><a>Dev Web</a></li>
            </ul>

            <BurgerMenu />


            {/* <input type="checkbox" className={styles.navigationCheckbox} id="navi" />

            <label htmlFor="navi" className={styles.navigationBtn}>
                <span className={styles.navigationIcon}>&nbsp;</span>
            </label>

            <div className={styles.navigationBg}>&nbsp;</div>


            <ul className={styles.navigationList}>
                <li><a className={styles.navigationItem}>à propos</a></li>
                <li><a className={styles.navigationItem}>Compétences</a></li>
                <li><a className={styles.navigationItem}>Projets</a></li>
                <li><a className={styles.navigationItem}>Contact</a></li>
            </ul> */}
        </nav>
    );
};
