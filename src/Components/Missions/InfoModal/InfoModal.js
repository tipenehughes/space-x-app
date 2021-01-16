import React from "react";
import InfoModalInterior from "./InfoModalInterior";
import { motion } from "framer-motion";
import styles from "./InfoModal.module.css";

const InfoModal = ({
    handleGoBack,
}) => {
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
            onClick={handleGoBack}
            className={styles.infoModal}
        >
            <InfoModalInterior />
        </motion.section>
    );
};

export default InfoModal;
