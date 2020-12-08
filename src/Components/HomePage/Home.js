import React from "react";
import { motion } from "framer-motion";
import styles from "../../CSS/Home.module.css";

const Home = ({ containerVariants }) => {
    return (
        <section className={styles.home}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={styles.homeContainer}
            >
                <div className={styles.homeTitle}>
                    <p>UPCOMING</p>
                    <h2>CRS-21 MISSION</h2>
                    <button>SEE MORE</button>
                </div>
                <div className={styles.homeCountdown}>
                    <div className={styles.homeUnit}>
                        <p>DAYS</p>
                        <div className={styles.homeCount}>
                            <div className={styles.box}>
                                <span>1</span>
                            </div>
                            <div className={styles.box}>
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeUnit}>
                        <p>HOURS</p>
                        <div className={styles.homeCount}>
                            <div className={styles.box}>
                                <span>0</span>
                            </div>
                            <div className={styles.box}>
                                <span>6</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeUnit}>
                        <p>MINS</p>
                        <div className={styles.homeCount}>
                            <div className={styles.box}>
                                <span>3</span>
                            </div>
                            <div className={styles.box}>
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
