import React from "react";

import InfoModalInterior from "./InfoModalInterior";
import { motion } from "framer-motion";
import styles from "../../../CSS/InfoModal.module.css";

const InfoModal = ({
    data,
    unixConverter,
    handleInfoModalPage,
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
    function stopPropagation(e) {
        e.stopPropagation();
    }
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onClick={handleGoBack}
            className={styles.infoModal}
        >
            <InfoModalInterior
                data={data}
                unixConverter={unixConverter}
                handleInfoModalPage={handleInfoModalPage}
                onClick={stopPropagation}
            />
        </motion.section>
    );
};

export default InfoModal;
