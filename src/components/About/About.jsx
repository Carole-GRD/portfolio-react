
import { Link } from "react-router-dom";

import styles from "./About.module.css";

import photo from "../../assets/images/about/photoCarole.png";
import cv from "../../assets/cv_carole_gerard.pdf";

export default function About() {

    return (
        <section id="about" className={styles.about}>

            <div className={styles.aboutContainer}>

                <div className={styles.aboutColumn}>

                    <div className={styles.aboutLeft}>

                        <h2>Développeuse Web Frontend</h2>
                        
                        <p>Animée par la volonté de comprendre les technologies omniprésentes dans notre quotidien, je me suis lancée dans l'exploration des métiers de l'informatique.</p>
                        <p>Ainsi, séduite par les défis et la logique inhérente à la programmation, mon intérêt s'est rapidement cristallisé autour du développement web frontend. C'est dans ce domaine précis que je mets en œuvre mes compétences pour concevoir des expériences utilisateur  intuitives et engageantes.</p>

                        <Link to={cv} target="_blank" id="myCV" className={styles.myCV}>
                            CV format PDF
                        </Link>

                    </div>

                    <div className={styles.aboutRight}>
                        <img src={photo} alt="Photo de Carole Gérard" />
                    </div>

                </div>

            </div>

        </section>
    );
};
