import { useState, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import styles from "./Form.module.css";


export default function Form() {

    // Retrieving service, template, and public key identifiers from environment variables
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    // State to open/close the modal
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState("");

    // ...
    const formRef = useRef();
    const timeoutRef = useRef(null);

    // ...
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    function onSubmit(data) {

        console.log("data : ", data);
        console.log("data.honeypot : ", data.honeypot);
        if (data.honeypot) {
            // Report as bot submission for tracking
            setModalText("Erreur de soumission du formulaire.");
            // Open the modal
            setModal(true);
            // Clear previous timeout (if any)
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            // Set a new timeout to hide the modal after 5 seconds
            timeoutRef.current = setTimeout(() => {
                setModal(false);
            }, 3000);

            // Early return and finish this task
            return;
        }
        else {
            // Send email using emailjs library
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
                .then((result) => {
                    // If the email is sent successfully
                    if (result.status === 200 && result.text === "OK") {
                        // Reports the sending of the email
                        setModalText("Merci pour votre message.");
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
            reset();
        }
    }

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
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>

                {/* This would be a bot field with type="hidden" */}
                <input
                    {...register('honeypot')}
                    placeholder='do not fill this'
                    type='checkbox'
                    className={styles.honeypot} />

                <div className={styles.sections}>
                    <section className={styles.left}>
                        <article>
                            <label htmlFor="gender">M. / Mme / Mlle :</label>
                            <select {...register('gender')} id="gender" defaultValue="">
                                <option value="" disabled hidden></option>
                                <option value="Mme">Madame</option>
                                <option value="M.">Monsieur</option>
                                <option value="Mlle">Mademoiselle</option>
                            </select>
                        </article>
                        <article>
                            <label htmlFor="lastName">Nom :</label>
                            <input
                                type="text"
                                {...register('lastName', { required: true, minLength: 2 })}
                                id="lastName"
                                placeholder="Nom" />
                            {errors.lastName && <span className={styles.errors}>Champs obligatoire (minimum 2 caractères)</span>}
                        </article>
                        <article>
                            <label htmlFor="firstName">Prénom :</label>
                            <input
                                type="text"
                                {...register('firstName', { required: true, minLength: 2 })}
                                id="firstName"
                                placeholder="Prénom" />
                            {errors.firstName && <span className={styles.errors}>Champs obligatoire (minimum 2 caractères)</span>}
                        </article>
                        <article>
                            <label htmlFor="tel">Téléphone :</label>
                            <input
                                type="tel"
                                {...register('tel')}
                                id="tel"
                                placeholder="Téléphone" />
                        </article>
                    </section>

                    <section className={styles.right}>
                        <article>
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
                                })}
                                id="email"
                                placeholder="Email" />
                            {errors.email && errors.email.type === "required" && <span className={styles.errors}>Champ obligatoire</span>}
                            {errors.email && errors.email.type === "pattern" && <span className={styles.errors}>Format d'email invalide</span>}
                        </article>
                        <article>
                            <label htmlFor="message">Message :</label>
                            <textarea
                                {...register('message', { required: true })}
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder="Message"></textarea>
                            {errors.message && <span className={styles.errors}>Champs obligatoire</span>}
                        </article>
                    </section>
                </div>

                <button type="submit" name="sendMessage" id="sendMessage" className={styles.sendMessage}>Envoyer</button>
            </form>

            {/* Modal section */}
            <div id="myModal" onClick={handleCloseModal} className={modal ? styles.activeModal : styles.hiddenModal}>
                <div className={styles.modalContent}>
                    {/* <span id="closeModalBtn" onClick={handleCloseModal} className={styles.closeModal}>&times;</span> */}
                    <p>{modalText}</p>
                </div>
            </div>
        </>
    );
};
