
// import styles from "./BurgerMenu.module.css";



// export default function BurgerMenu({ isMenuOpen, onMenuClick, onItemClick }) {


//     return (
//         <>
//             <input type="checkbox" className={styles.navigationCheckbox} id="navi" onClick={onMenuClick} checked={isMenuOpen} readOnly />

//             <label htmlFor="navi" className={styles.navigationBtn}>
//                 <span className={styles.navigationIcon}>&nbsp;</span>
//             </label>

//             <div className={styles.navigationBg}>&nbsp;</div>


//             <ul className={styles.navigationList}>
//                 <li>
//                     <a className={styles.navigationItem} onClick={(e) => onItemClick(e)}>
//                         à propos
//                     </a>
//                 </li>
//                 <li>
//                     <a className={styles.navigationItem} onClick={(e) => onItemClick(e)}>
//                         Compétences
//                     </a>
//                 </li>
//                 <li>
//                     <a className={styles.navigationItem} onClick={(e) => onItemClick(e)}>
//                         Projets
//                     </a>
//                 </li>
//                 <li>
//                     <a className={styles.navigationItem} onClick={(e) => onItemClick(e)}>
//                         Contact
//                     </a>
//                 </li>
//             </ul>
//         </>
//     );
// };



// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////

import { Link } from "react-scroll";
import styles from "./BurgerMenu.module.css";
import stylesNav from "./Navbar.module.css";

export default function BurgerMenu({ activeLink, isMenuOpen, onMenuClick, onItemClick }) {
  
  const sections = ["about", "competences", "projects", "contact"];

  return (
    <>
      <input type="checkbox" className={styles.navigationCheckbox} id="navi" onClick={onMenuClick} checked={isMenuOpen} readOnly />

      <label htmlFor="navi" className={styles.navigationBtn}>
        <span className={styles.navigationIcon}>&nbsp;</span>
      </label>

      <div className={styles.navigationBg}>&nbsp;</div>

      <ul className={styles.navigationList}>
        {sections.map((section) => (
          <li key={section}>
            <Link 
              to={section} 
              spy={true} 
              smooth={true} 
              duration={500} 
              onClick={() => onItemClick(section)}
              className={`${styles.navigationItem} ${activeLink === section ? stylesNav.scrollSpy : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
