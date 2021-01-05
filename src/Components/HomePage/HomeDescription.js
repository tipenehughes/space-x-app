import React from "react";
import { motion } from "framer-motion";
import styles from "../../CSS/HomeDescription.module.css";

const HomeDescription = ({ descriptionVariants, open, data }) => {
    return (
        <motion.div
            class={styles.homeDescriptionContainer}
            variants={descriptionVariants}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
        >
            <div class={styles.homeDescription}>
                <h3>{data.name}</h3>
                <p>{data.details ? data.details : "Check back soon for more information."}</p>
            </div>
            <div class={styles.homeTable}>
                <table class={styles.table}>
                    <tbody>
                        <tr>
                            <td>CORE</td>
                            <td>BLOCK 4</td>
                        </tr>
                        <tr>
                            <td>CORE SERIAL</td>
                            <td>B1028</td>
                        </tr>
                        <tr>
                            <td>REUSED</td>
                            <td>TRUE</td>
                        </tr>
                        <tr>
                            <td>STATIC FIRE</td>
                            <td>1 MAR 2018</td>
                        </tr>
                        <tr>
                            <td>PAYLOAD ORBIT</td>
                            <td>LOW-EARTH</td>
                        </tr>
                        <tr>
                            <td>LANDING SITE</td>
                            <td>LZ-1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default HomeDescription;
