
import styles from "./BurgerMenu.module.css";



export default function BurgerMenu({ isMenuOpen, onMenuClick, onItemClick }) {


    return (
        <>
            <input type="checkbox" className={styles.navigationCheckbox} id="navi" onClick={onMenuClick} checked={isMenuOpen} readOnly />

            <label htmlFor="navi" className={styles.navigationBtn}>
                <span className={styles.navigationIcon}>&nbsp;</span>
            </label>

            <div className={styles.navigationBg}>&nbsp;</div>


            <ul className={styles.navigationList}>
                <li>
                    <a className={styles.navigationItem} onClick={(e) => onItemClick(e)}>
                        à propos
                    </a>
                </li>
                <li>
                    <a className={styles.navigationItem} onClick={(e) => onItemClick(e)}>
                        Compétences
                    </a>
                </li>
                <li>
                    <a className={styles.navigationItem} onClick={(e) => onItemClick(e)}>
                        Projets
                    </a>
                </li>
                <li>
                    <a className={styles.navigationItem} onClick={(e) => onItemClick(e)}>
                        Contact
                    </a>
                </li>
            </ul>
        </>
    );
};
