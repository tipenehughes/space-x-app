import React from "react";
import { motion } from "framer-motion";
import styles from "./HomeDescription.module.css";

const HomeDescription = ({ descriptionVariants, open, data }) => {
    // Converts Unix code returned from API into human readable format

    const unixConverter = (unix) => {
        const milliseconds = unix * 1000;
        const dateObject = new Date(milliseconds);
        const humanDateFormat = dateObject.toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
        return humanDateFormat.toUpperCase();
    };

    return (
        <motion.div
            className={styles.homeDescriptionContainer}
            variants={descriptionVariants}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
        >
            <div className={styles.homeDescription}>
                <h3>{data.name}</h3>
                <p>
                    {data.details
                        ? data.details
                        : "Check back soon for more information."}
                </p>
            </div>
            <div className={styles.homeTable}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>SCHEDULED LAUNCH</td>
                            <td>{unixConverter(data.date_unix)}</td>
                        </tr>
                        <tr>
                            <td>LAUNCH SITE</td>
                            <td>KSC LC 39A</td>
                        </tr>
                        <tr>
                            <td>FLIGHT NUMBER</td>
                            <td>114</td>
                        </tr>
                        <tr>
                            <td>REUSED</td>
                            <td>TRUE</td>
                        </tr>
                        <tr>
                            <td>PAYLOAD ORBIT</td>
                            <td>LOW-EARTH</td>
                        </tr>
                        <tr>
                            <td>LANDING SITE</td>
                            <td>OCISLY</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default HomeDescription;
