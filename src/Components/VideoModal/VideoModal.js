import React from "react";
import styles from "../../CSS/VideoModal.module.css";
import data from '../../data.json';
import { useHistory, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const VideoModal = () => {
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };
  const { vehicle, video } = useParams();
  
  console.log(vehicle, video);
  
  console.log(data[vehicle][video]);
  

    return (
        <section className={styles.videoModal} onClick={handleGoBack}>
            <div className={styles.videoContainer}>
                <iframe
                    className={styles.video}
                    src={data[vehicle][video]}
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                ></iframe>
            </div>
            <div className={styles.closeIcon}>
                <button onClick={handleGoBack}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </section>
    );
};

export default VideoModal;
