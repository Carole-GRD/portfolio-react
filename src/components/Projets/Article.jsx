
import styles from "./Article.module.css";

import { Link } from "react-router-dom";


export default function Article({dataArticle}) {
    return (
        <>
            <article className={styles.articleContent}>
                <h3>{dataArticle.title}</h3>
                <Link to={dataArticle.to} target="_blank">
                    <img src={dataArticle.src} alt={dataArticle.alt} />
                </Link>
                <h4>{dataArticle.project}</h4>
                <p>{dataArticle.desc}</p>
            </article>
        </>
    );
};
