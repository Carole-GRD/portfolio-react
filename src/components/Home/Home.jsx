import styles from "./Home.module.css";

import bigLogo from "../../assets/images/grandLogoCG.png"


export default function Home() {

    return (

        <section id={styles.home}>

            <img src={bigLogo} alt="Logo des initiales de Carole Gérard" />

            <div className={styles.textHomeContainer}>
                <div className={styles.textHomeContent}>
                    <h1>Carole Gérard</h1>
                    <p>Fais de ta vie un rêve et d'un rêve une réalité <span> - Antoine de Saint-Exupéry</span></p>
                </div>
            </div>

            <div className={styles.homeFooter}>
                <p><strong>Développeuse Web</strong></p>
                <p><strong>Carole Gérard</strong> &copy;2024</p>
            </div>
            
        </section>

    );
};
