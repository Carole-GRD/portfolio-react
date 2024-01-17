
import styles from "./Projects.module.css";

import Article from "./Article";

import logo from "../../assets/images/projects/logo.png";
import quizVolley from "../../assets/images/projects/quizVolley.jpg";
import todoApp from "../../assets/images/projects/list.png";
import movieBrowser from "../../assets/images/projects/movieBrowser.jpg";
// import weatherApp from "../../assets/images/projects/weatherApp.png";
// import weatherApp from "../../assets/images/projects/weatherApp.jpg";
import rain from "../../assets/images/projects/rain.jpg";



export default function Projects() {

    const dataArticle = [
        {
            title: "Fruit concept",
            to: "https://carole-grd.github.io/fruit-concept/",
            src: logo,
            alt: "Logo de Fruit Concept",
            project: "Projet collaboratif",
            desc: "Site réalisé lors du projet de fin de formation \"Découverte des métiers de l'informatique\" de chez IF3N."
        },
        {
            title: "Quiz sur le volley",
            to: "https://carole-grd.github.io/Quiz-sur-le-volley-ball/",
            src: quizVolley,
            alt: "Photo d'un ballon de volley dans un filet",
            project: "Projet personnel",
            desc: "Quiz réalisé dans le cadre de mon apprentissage du langage Javascript."
        },
        {
            title: "Weather App",
            to: "https://weather-app-zeta-jade.vercel.app/",
            src: rain,
            alt: "Image par Michaela, at home in Germany • Thank you very much for a like de Pixabay",
            project: "Projet individuel",
            desc: "Site réalisé dans le cadre de la consolidation des langages HTML, SCSS et Javascript, lors de ma formation chez BeCode."
        },
        {
            title: "Todo App",
            to: "https://react-intro-taupe.vercel.app/",
            src: todoApp,
            alt: "Image par Memed_Nurrohmad de Pixabay",
            project: "Projet individuel",
            desc: "Site réalisé dans le cadre de l'apprentissage de la bibliothèque React, lors de ma formation chez BeCode."
        },
        {
            title: "Movie Browser",
            to: "https://movie-browser-nu.vercel.app/",
            src: movieBrowser,
            alt: "Image par Gerd Altmann de Pixabay",
            project: "Projet individuel",
            desc: "Application réalisée dans le cadre de l'apprentissage de React et de l'utilisation d'une API, lors de ma formation chez BeCode."
        },
    ]


    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projectsContainer}>
                <h2>projets</h2>

                <div className={styles.projectsContent}>

                    <div className={styles.articleDisplay}>

                        {dataArticle.map((data, index) => (
                            <Article key={index} dataArticle={data} />
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};
