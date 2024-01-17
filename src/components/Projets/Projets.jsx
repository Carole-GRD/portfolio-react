
import styles from "./Projets.module.css";

import Article from "./Article";

import logo from "../../assets/images/projects/logo.png";
import quizVolley from "../../assets/images/projects/quizVolley.jpg";
import todoApp from "../../assets/images/projects/list.png";
import movieBrowser from "../../assets/images/projects/movieBrowser.jpg";
// import weatherApp from "../../assets/images/projects/weatherApp.png";
// import weatherApp from "../../assets/images/projects/weatherApp.jpg";
import rain from "../../assets/images/projects/rain.jpg";



export default function Projets() {

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

                    

                        {/* <article>
                            <h3>Fruit concept</h3>
                            <Link to="https://fruit-concept.vercel.app/" target="_blank"></Link>
                            <Link to="https://carole-grd.github.io/fruit-concept/" target="_blank">
                                <img src={logo} alt="Logo de Fruit Concept" />
                            </Link>
                            <h4>Projet collaboratif</h4>
                            <p>Site réalisé lors du projet de fin de formation "Découverte des métiers de l'informatique" de chez IF3N.</p>
                        </article> */}

                        {/* <article>
                            <h3>Quiz sur le volley</h3>
                            <Link to="https://carole-grd.github.io/Quiz-sur-le-volley-ball/" target="_blank">
                                <img src={quizVolley} alt="Photo d'un ballon de volley dans un filet" />
                            </Link>
                            <h4>Projet personnel</h4>
                            <p>Quiz réalisé dans le cadre de mon apprentissage du langage Javascript.</p>
                        </article> */}

                        {/* <article>
                            <h3>Weather App</h3>
                            <Link to="https://weather-app-zeta-jade.vercel.app/" target="_blank">
                                <img src={weatherApp} alt="Image de l'application" />
                                <img src={weatherApp} alt="Image par Ben Kerckx de Pixabay" />
                                <img src={rain} alt="Image par Michaela, at home in Germany • Thank you very much for a like de Pixabay" />
                            </Link>
                            <h4>Projet individuel</h4>
                            <p>Site réalisé dans le cadre de la consolidation des langages HTML, SCSS et Javascript, lors de ma formation chez BeCode.</p>
                        </article> */}

                        {/* <article>
                            <h3>Todo App</h3>
                            <Link to="https://react-intro-lvedfqpcv-caroles-projects.vercel.app/" target="_blank"></Link>
                            <Link to="https://react-intro-taupe.vercel.app/" target="_blank">
                                <img src={todoApp} alt="Image par Memed_Nurrohmad de Pixabay" />
                            </Link>
                            <h4>Projet individuel</h4>
                            <p>Site réalisé dans le cadre de l'apprentissage de la bibliothèque React, lors de ma formation chez BeCode.</p>
                        </article> */}

                        {/* <article>
                            <h3>Movie Browser</h3>
                            <Link to="https://movie-browser-nu.vercel.app/" target="_blank">
                                <img src={movieBrowser} alt="Image par Gerd Altmann de Pixabay" />
                            </Link>
                            <h4>Projet individuel</h4>
                            <p>Application réalisée dans le cadre de l'apprentissage de React et de l'utilisation d'une API, lors de ma formation chez BeCode.</p>
                        </article> */}
                    </div>

                </div>
            </div>
        </section>
    );
};
