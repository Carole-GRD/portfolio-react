
import styles from "../components/Home/Home.module.css";

export default function resetAnimation() {

    const animatedText = document.querySelector('#animatedText');
    const animatedLogo = document.querySelector('#animatedLogo');
    
    // Supprimez l'animation actuelle
    // animatedText.classList.remove(styles.textHomeContent);
    if (animatedText.classList.contains(styles.textHomeContent2)) {
        animatedText.classList.remove(styles.textHomeContent2);
    }
    else {
        animatedText.classList.remove(styles.textHomeContent);
    }
    if (animatedLogo.classList.contains(styles.logoHome2)) {
        animatedLogo.classList.remove(styles.logoHome2);
    }
    else {
        animatedLogo.classList.remove(styles.logoHome);
    }
    
    // Forcez un recalcul du style pour déclencher une réinitialisation
    void animatedText.offsetWidth;
    
    // Réappliquez la classe d'animation
    animatedText.classList.add(styles.textHomeContent2);
    animatedLogo.classList.add(styles.logoHome2);
}