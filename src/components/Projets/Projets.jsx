
import styles from "./Projets.module.css";

import logo from "../../assets/images/projects/logo.png";
import quizVolley from "../../assets/images/projects/quizVolley.jpg";
import todoApp from "../../assets/images/projects/list.png";
import movieBrowser from "../../assets/images/projects/movieBrowser.jpg";
// import weatherApp from "../../assets/images/projects/weatherApp.png";
// import weatherApp from "../../assets/images/projects/weatherApp.jpg";
import rain from "../../assets/images/projects/rain.jpg";

import { Link } from "react-router-dom";

export default function Projets() {

    const dataArticle = [
        {
            title: "Fruit concept",
            to: "fruitConcept.html"

        }
    ]

    // Mon premier site web
    // https://carole-grd.github.io/Mon-premier-site-Interface3.Namur/index.html

    // Movie Browser
    // https://movie-browser-nu.vercel.app/


    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projectsContainer}>
                <h2>projets</h2>

                <div className={styles.projectsContent}>

                    <div className={styles.articleDisplay}>

                    

                        <article>
                            <h3>Fruit concept</h3>
                            {/* <Link to="https://fruit-concept.vercel.app/" target="_blank"> */}
                            <Link to="https://carole-grd.github.io/fruit-concept/" target="_blank">
                                <img src={logo} alt="Logo 'Fruit Concept' du site réalisé lors de la formation 'Découverte des métiers de l'informtique' d'Interface 3 Namur." />
                            </Link>
                            <h4>Projet collaboratif</h4>
                            {/* <p>-</p> */}
                            <p>Site réalisé lors du projet de fin de formation "Découverte des métiers de l'informatique" de chez IF3N.</p>
                        </article>

                        <article>
                            <h3>Quiz sur le volley</h3>
                            <Link to="https://carole-grd.github.io/Quiz-sur-le-volley-ball/" target="_blank">
                                <img src={quizVolley} alt="Photo d'un ballon de volley dans un filet" />
                            </Link>
                            <h4>Projet personnel</h4>
                            {/* <p>-</p> */}
                            <p>Quiz réalisé dans le cadre de mon apprentissage du langage Javascript.</p>
                        </article>

                        <article>
                            <h3>Weather App</h3>
                            <Link to="https://weather-app-zeta-jade.vercel.app/" target="_blank">
                                {/* <img src={weatherApp} alt="Image de l'application" /> */}
                                {/* <img src={weatherApp} alt="Image par Ben Kerckx de Pixabay" /> */}
                                <img src={rain} alt="Image par Michaela, at home in Germany • Thank you very much for a like de Pixabay" />
                            </Link>
                            <h4>Projet individuel</h4>
                            {/* <p>-</p> */}
                            <p>Site réalisé dans le cadre de la consolidation des langages HTML, SCSS et Javascript, lors de ma formation chez BeCode.</p>
                        </article>

                        <article>
                            <h3>Todo App</h3>
                            {/* <Link to="https://react-intro-lvedfqpcv-caroles-projects.vercel.app/" target="_blank"> */}
                            <Link to="https://react-intro-taupe.vercel.app/" target="_blank">
                                <img src={todoApp} alt="Image par Memed_Nurrohmad de Pixabay" />
                            </Link>
                            <h4>Projet individuel</h4>
                            {/* <p>-</p> */}
                            <p>Site réalisé dans le cadre de l'apprentissage de la bibliothèque React, lors de ma formation chez BeCode.</p>
                        </article>

                        <article>
                            <h3>Movie Browser</h3>
                            <Link to="https://movie-browser-nu.vercel.app/" target="_blank">
                                <img src={movieBrowser} alt="Image par Gerd Altmann de Pixabay" />
                            </Link>
                            <h4>Projet individuel</h4>
                            {/* <p>-</p> */}
                            <p>Application réalisée dans le cadre de l'apprentissage de React et de l'utilisation d'une API, lors de ma formation chez BeCode.</p>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    );
};
