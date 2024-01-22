
import styles from "./Contact.module.css";

import Footer from "../Footer/Footer";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <h2>Contact</h2>

                <form action="">
                    <div className={styles.sections}>
                        <section className={styles.left}>
                            <article>
                                <label htmlFor="gender">Mr / Mme / Mlle :</label>
                                <select name="gender" id="gender" defaultValue="">
                                    {/* <option value selected="selected"></option> */}
                                    <option value="" disabled hidden></option>
                                    <option value="madame">Madame</option>
                                    <option value="monsieur">Monsieur</option>
                                    <option value="mademoilselle">Mademoiselle</option>
                                </select>
                            </article>
                            <article>
                                <label htmlFor="lastName">Nom :</label>
                                <input type="text" name="lastName" id="lastName" placeholder="Nom" />
                            </article>

                            <article>
                                <label htmlFor="firstName">Prénom :</label>
                                <input type="text" name="firstName" id="firstName" placeholder="Prénom" />
                            </article>

                            <article>
                                <label htmlFor="tel">Téléphone :</label>
                                <input type="tel" name="tel" id="tel" placeholder="Téléphone" />
                            </article>
                        </section>

                        <section className={styles.right}>
                            <article>
                                <label htmlFor="email">Email :</label>
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </article>

                            <article>
                                <label htmlFor="message">Message :</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                            </article>
                        </section>
                    </div>

                    <input type="submit" name="sendMessage" id="sendMessage" className={styles.sendMessage} value="Envoyer" />

                </form>
            </div>


            <Footer style={'contactFooter'} />
            
        </section>
    );
};
