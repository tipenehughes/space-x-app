import React from "react";

import InfoModalInterior from "./InfoModalInterior";
import { motion } from "framer-motion";
import styles from "../../../CSS/InfoModal.module.css";

const InfoModal = ({
    data,
    index,
    unixConverter,
    handleInfoModalPage,
    handleGoBack,
    stopPropagation,
    page,
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
            <InfoModalInterior
                data={data[index]}
                unixConverter={unixConverter}
                handleInfoModalPage={handleInfoModalPage}
                stopPropagation={stopPropagation}
                page={page}
            />
        </motion.section>
    );
};

export default InfoModal;
