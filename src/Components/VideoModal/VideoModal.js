import React from "react";
import { motion } from "framer-motion";
import styles from "../../CSS/VideoModal.module.css";
import data from "../../data.json";
import { useHistory, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const VideoModal = () => {
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };
    const { vehicle, video } = useParams();

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "tween",
            },
        },
    };
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={styles.videoModal}
            onClick={handleGoBack}
        >
            <div className={styles.videoContainer}>
                <iframe
                    className={styles.video}
                    src={data[vehicle][video]}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                ></iframe>
            </div>
            <div className={styles.closeIcon}>
                <button onClick={handleGoBack}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </motion.section>
    );
};

export default VideoModal;
