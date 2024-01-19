
import styles from "./Article.module.css";

import { Link } from "react-router-dom";


export default function Article({ dataArticle }) {
    return (
        <>
            <Link to={dataArticle.to} target="_blank">
                <article className={styles.articleContent}>
                    <h3>{dataArticle.title}</h3>
                    <img src={dataArticle.src} alt={dataArticle.alt} />
                    <h4>{dataArticle.project}</h4>
                    <p>{dataArticle.desc}</p>
                </article>
            </Link>
        </>
    );
};
