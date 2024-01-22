
import styles from "./Footer.module.css";

export default function Footer({style}) {
    return (
        <div className={`${styles.footer} ${styles.style}`}>
            <p><strong>Carole Gérard</strong></p>
            <p>Développeuse Web Frontend &copy;2024</p>
        </div>
    );
};
