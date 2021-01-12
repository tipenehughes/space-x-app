import React from "react";
import styles from "./InfoModal.module.css";

const MediaData = ({ data }) => {
    return (
        <div className={styles.mediaContainer}>
            <div className={styles.videoContainer}>
                <iframe
                    className={styles.video}
                    src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                ></iframe>
            </div>
            <div className={styles.mediaBtns}>
                <a
                    href={data.links.wikipedia}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    WIKIPEDIA
                </a>
                <a
                    href={data.links.article_link}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    NEWS ARTICLE
                </a>
                <a
                    href={data.links.presskit}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    PRESS KIT
                </a>
            </div>
        </div>
    );
};

export default MediaData;
