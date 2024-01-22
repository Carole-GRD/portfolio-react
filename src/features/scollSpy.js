import styles from "../components/Navbar/Navbar.module.css";


export default function scrollSpy(event) {
    const navLinks = [...document.querySelectorAll('nav a')];

    // retirer le style du lien cliqué précédemment
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].classList.contains(styles.scrollSpy)) {
            navLinks[i].classList.remove(styles.scrollSpy);
        }
    }

    // obtenir l'index du lien cliqué
    const linkIndex = navLinks.indexOf(event.target);
    console.log("linkIndex : ", linkIndex);
    
    // ajouter le style au lien cliqué
    if (linkIndex === -1 || linkIndex === 0) {
        navLinks[1].classList.add(styles.scrollSpy);
    }
    else {                                    
        navLinks[linkIndex].classList.add(styles.scrollSpy);
    }

}