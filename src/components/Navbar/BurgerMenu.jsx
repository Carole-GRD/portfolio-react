
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
    return (
        <>
            <input type="checkbox" className={styles.navigationCheckbox} id="navi" />

            <label htmlFor="navi" className={styles.navigationBtn}>
                <span className={styles.navigationIcon}>&nbsp;</span>
            </label>

            <div className={styles.navigationBg}>&nbsp;</div>


            <ul className={styles.navigationList}>
                <li><a className={styles.navigationItem}>à propos</a></li>
                <li><a className={styles.navigationItem}>Compétences</a></li>
                <li><a className={styles.navigationItem}>Projets</a></li>
                <li><a className={styles.navigationItem}>Contact</a></li>
            </ul>
        </>
    );
};
