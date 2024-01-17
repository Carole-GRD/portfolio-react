
import styles from "./Card.module.css";



export default function Card({dataCard}) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <div className={styles.front}>
                    <h4>{dataCard.title}</h4>
                    <img src={dataCard.logo} alt={dataCard.alt} />
                </div>
                <div className={styles.back}>
                    {dataCard.techno.map((t, index) => (
                        <p key={index}>{t}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
