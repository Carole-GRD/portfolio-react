import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

import styles from "./Form.module.css";


export default function Form() {

    // Retrieving service, template, and public key identifiers from environment variables
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    // State to open/close the modal
    const [modal, setModal] = useState(false);

    const formRef = useRef();
    const timeoutRef = useRef(null);

    // Function to send an email
    const sendEmail = (e) => {
        e.preventDefault();

        // Send email using emailjs library
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {

                // If the email is sent successfully
                if (result.status ===  200 && result.text === "OK") {
                    // Open the modal
                    setModal(true);

                    // Clear previous timeout (if any)
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }

                    // Set a new timeout to hide the modal after 5 seconds
                    timeoutRef.current = setTimeout(() => {
                        setModal(false);
                    }, 5000);
                }
            }, (error) => {
                console.log(error);
                console.log(error.text);
            });

        // Reset the form fields
        e.target.reset();
    };

    // useEffect hook to clean up the timeout on component unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Function to close modal
    function handleCloseModal() {
        setModal(false);
    }

    return (
        <>
        {/* Form section with input fields */}
            <form ref={formRef} onSubmit={sendEmail}>
                <div className={styles.sections}>
                    <section className={styles.left}>
                        <article>
                            <label htmlFor="gender">M. / Mme / Mlle :</label>
                            <select name="gender" id="gender" defaultValue="">
                                <option value="" disabled hidden></option>
                                <option value="Mme">Madame</option>
                                <option value="M.">Monsieur</option>
                                <option value="Mlle">Mademoiselle</option>
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

                <button type="submit" name="sendMessage" id="sendMessage" className={styles.sendMessage}>Envoyer</button>
            </form>

            {/* Modal section */}
            <div id="myModal" onClick={handleCloseModal} className={modal ? styles.activeModal : styles.hiddenModal}>
                <div className={styles.modalContent}>
                    <span id="closeModalBtn" onClick={handleCloseModal} className={styles.closeModal}>&times;</span>
                    <p>Merci pour votre message.</p>
                </div>
            </div>
        </>
    );
};
