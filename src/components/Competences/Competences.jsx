
import Card from "./Card";

import styles from "./Competence.module.css";

import iconWebDesign from "../../assets/images/competences/iconWebDesign.png";
import iconFrontEnd from "../../assets/images/competences/iconFrontEnd.png";
import iconAndroid from "../../assets/images/competences/iconAndroid.png";
import iconDatabase from "../../assets/images/competences/iconDatabase.png";
import iconCollaborate from "../../assets/images/competences/iconCollaborate.png";
import iconInfrastructure from "../../assets/images/competences/iconInfrastructure.png";
    
    
export default function Competences() {

    const dataCard = [
        {   
            title: "Langages",
            logo: iconWebDesign, 
            alt: "Icone de web design du graphiste ibrandify",
            techno: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python"]
        },
        {   
            title: "Frontend",
            logo: iconFrontEnd, 
            alt: "Icone d'android du graphiste Swifticons",
            techno: ["React", "Angular", "Tailwindcss", "Bootstrap", "GreenSock (GSAP)", "OpenLayers - Leaflet", "Chart.js"]
        },
        {   
            title: "Backend",
            logo: iconAndroid, 
            alt: "Icone d'android du graphiste Swifticons",
            techno: ["Node.js", "Express.js", "PHP"]
        },
        {   
            title: "Database",
            logo: iconDatabase, 
            alt: "Icone de database du graphiste Smashicons",
            techno: ["SQL - MySQL", "NoSQL - MongoDB"]
        },
        {   
            title: "Collaboratif",
            logo: iconCollaborate, 
            alt: "Icone de collaboration du graphiste ultimatearm",
            techno: ["GitHub", "Trello"]
        },
        {   
            title: "Infrastructure",
            logo: iconInfrastructure, 
            alt: "Icone d'infrastructure du graphiste Eucalyp",
            techno: ["Réseaux", "Système", "Linux"]
        },
    ]

    

    return (
        <section id="competences" className={styles.competence}>

            <div className={styles.competenceContainer}>

                <h2>Compétences</h2>

                <div className={styles.competenceContent}>

                    <div className={styles.cardDisplay}>

                        {dataCard.map((data, index) => (
                            <Card key={index} dataCard={data}/>
                        ))}

                    </div>
                    
                </div>
            </div>
        </section>
    );
};
