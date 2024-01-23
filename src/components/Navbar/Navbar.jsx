// import { useState } from "react";

// import styles from "./Navbar.module.css";
// // import navigationStyles from "./BurgerMenu.module.css";

// import smallLogo from "../../assets/images/logo/petitLogoCG.png";

// import BurgerMenu from "./BurgerMenu";

// import scrollSmooth from "../../features/scrollSmooth";
// import scrollSpy from "../../features/scollSpy";


// export default function Navbar() {

//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const handleMenuClick = () => {
//         // Mettez à jour l'état pour inverser son état actuel
//         setMenuOpen(!isMenuOpen);
//     };

//     const handleMenuItemClick = (e) => {
//         // Ferme le menu avant d'appeler scrollSmooth
//         // setMenuOpen(!isMenuOpen);
//         setMenuOpen(false);
//         scrollSmooth(e);
//         scrollSpy(e);
//     };

//     return (
//         <nav>

//             <ul>
//                 <li className={styles.logo}>
//                     <a onClick={(e) => handleMenuItemClick(e)}>
//                         <img src={smallLogo} alt="Logo Carole Gérard avec un lien qui ramène à la page accueil" />
//                     </a>
//                 </li>
//                 {/* <li className={navigationStyles.navigationItem}> */}
//                 <li>
//                     <a onClick={(e) => handleMenuItemClick(e)} className={styles.scrollSpy}>
//                         Dev Web
//                     </a>
//                 </li>
//             </ul>

//             <BurgerMenu 
//                 isMenuOpen={isMenuOpen}
//                 onMenuClick={handleMenuClick} 
//                 onItemClick={handleMenuItemClick} 
//             />

//         </nav>
//     );
// };


// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////


import { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";

import styles from "./Navbar.module.css";
import smallLogo from "../../assets/images/logo/petitLogoCG.png";
import BurgerMenu from "./BurgerMenu";
import resetAnimation from "../../features/resetAnimation";


export default function Navbar() {
    // State pour le menu mobile
    const [isMenuOpen, setMenuOpen] = useState(false);
    // State pour suivre la section active lors du scroll
    const [activeLink, setActiveLink] = useState("home");

    // Gestion du clic sur le bouton du menu mobile
    const handleMenuClick = () => {
        // Mode mobile => ouvrir/fermer le menu hamburger
        setMenuOpen(!isMenuOpen);
    };

    // Gestion du clic sur les éléments du menu
    const handleMenuItemClick = (section) => {
        // Ferme le menu avant d'appeler scrollSmooth
        if (isMenuOpen) {
            setMenuOpen(false);   
        }
        // Scroll en douceur vers la section correspondante
        scroller.scrollTo(section, {
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuart",
        });
        // Mettre à jour la section active pour le "scroll spy"
        setActiveLink(section);
        // Réinitialiser l'animation si la section est "home"
        if (section === "home") {
            resetAnimation();
        }
    };

    useEffect(() => {

        const handleScroll = () => {
            // Logique de gestion du "scroll spy" lors du scroll avec la souris ou le pavé tactile
            const scrollPosition = window.scrollY;

            // Obtenir les positions des différentes sections
            const aboutSection = document.querySelector("#about");
            const competencesSection = document.querySelector("#competences");
            const projectsSection = document.querySelector("#projects");
            const contactSection = document.querySelector("#contact");

            const contactPosition = (contactSection.offsetTop - 500);
            const projectsPosition = (projectsSection.offsetTop - 500);
            const competencesPosition = (competencesSection.offsetTop - 500);
            const aboutPosition = (aboutSection.offsetTop - 500);

            // Déterminer la section active en fonction de la position de défilement
            if (scrollPosition > contactPosition) {
                setActiveLink("contact");
            } else if (scrollPosition > projectsPosition) {
                setActiveLink("projects");
            } else if (scrollPosition > competencesPosition) {
                setActiveLink("competences");
            } else if (scrollPosition > aboutPosition) {
                setActiveLink("about");
            } else {
                setActiveLink("home");
            }

            // Réinitialiser l'animation si la position de défilement est en haut de la page
            if (window.scrollY === 0) {
                resetAnimation();
            }
        };

        // Ajouter un écouteur d'événements pour le scroll
        window.addEventListener("scroll", handleScroll);

        // Nettoyer l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [activeLink]);


    return (
        <nav>
            
            <ul>
                <li className={styles.logo}>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => handleMenuItemClick("home")}
                    >
                        <img src={smallLogo} alt="Logo Carole Gérard avec un lien qui ramène à la page accueil" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={activeLink === "home" ? styles.scrollSpy : ""}
                        onClick={() => handleMenuItemClick("home")}
                    >
                        Dev Web
                    </Link>
                </li>
            </ul>

            <BurgerMenu
                isMenuOpen={isMenuOpen}
                activeLink={activeLink}
                onMenuClick={handleMenuClick}
                onItemClick={handleMenuItemClick}
            />

        </nav>
    );
};

