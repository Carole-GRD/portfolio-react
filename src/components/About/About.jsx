
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
                        
                        <p>Attirée par la compréhension des technologies de plus en plus présentes dans notre quotidien, j'ai entrepris d'explorer les métiers de l'informatique.</p>
                        <p>Attirée par les défis et la logique, j'ai développé un intérêt marqué pour la programmation. Mon choix s'est orienté vers le développement web frontend, où je peux exploiter mes compétences pour créer des expériences utilisateur significatives.</p>

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
