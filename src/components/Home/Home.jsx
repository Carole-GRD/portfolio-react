import styles from "./Home.module.css";

import bigLogo from "../../assets/images/logo/grandLogoCG.png"

import Footer from "../Footer/Footer";

export default function Home() {

    return (

        <section id="home" className={styles.home}>

            <img id="animatedLogo" className={styles.logoHome} src={bigLogo} alt="Logo des initiales de Carole Gérard" />

            <div className={styles.textHomeContainer}>
                <div id="animatedText" className={styles.textHomeContent}>
                    {/* <h1>Carole Gérard</h1> */}
                    {/* <p>Fais de ta vie un rêve et d'un rêve une réalité <span> - Antoine de Saint-Exupéry</span></p> */}
                    <p>Fais de ta vie un rêve et d'un rêve une réalité</p>
                    <p><span> - Antoine de Saint-Exupéry</span></p>
                </div>
            </div>


            <Footer style={'homeFooter'} />
            
        </section>

    );
};
