

export default function resetAnimation() {

    const element = document.querySelector('#animatedText');
    console.log(element);
    
    // Supprimez l'animation actuelle
    element.style.animation = 'none';
    
    // Forcez un recalcul du style pour déclencher une réinitialisation
    void element.offsetWidth;
    
    // Réappliquez la classe d'animation
    element.style.animation = '1.2s ease-in-out forwards textHomeContent';
}