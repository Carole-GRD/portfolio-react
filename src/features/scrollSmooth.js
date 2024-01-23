
// import positionOfSections from "./positionOfSections";
// import resetAnimation from "./resetAnimation";

// export default function scrollSmooth(event) {
//     // console.log('event : ', event);
//     let sectionsPosition = positionOfSections();
//     console.log("sectionsPosition : ", sectionsPosition);
    
//     const navLinks = [...document.querySelectorAll('nav a')];
//     const linkIndex = navLinks.indexOf(event.target);
//     // console.log('navLinks : ', navLinks);
//     // console.log('linkIndex : ', linkIndex);

//     if (linkIndex === -1 || linkIndex === 0 || linkIndex === 1) {
//         // disableScroll(); // Désactive le scroll temporairement
//         window.scrollTo({
//             top: sectionsPosition[0],
//             behavior: "smooth",
//         })
//         resetAnimation();
//     }
//     else {
//         // disableScroll(); // Désactive le scroll temporairement
//         window.scrollTo({
//             top: sectionsPosition[linkIndex - 1],
//             behavior: "smooth",
//         })
//     }
// }







