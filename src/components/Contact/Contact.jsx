
import styles from "./Contact.module.css";

import Form from "./Form";
import Footer from "../Footer/Footer";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            
            <div className={styles.contactContainer}>
                <h2>Contact</h2>
                <Form />
            </div>

            <Footer style={'contactFooter'} />

        </section>
    );
};
