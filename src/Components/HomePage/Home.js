import React, { useState, useEffect } from "react";
import HomeDescription from "./HomeDescription";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Home = ({
    containerVariants,
    descriptionVariants,
    getOpen,
    open,
    data,
}) => {
    // Countdown timer function
    const countDown = () => {
        const countDownDate = new Date(data.date_local).getTime();
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        let timeLeft = {};
        if (distance > 0) {
            timeLeft = {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString(),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ).toString(),
                minutes: Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                ).toString(),
                seconds: Math.floor((distance % (1000 * 60)) / 1000).toString(),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
        return timeLeft;
    };
    // Countdown Timer State
    const [time, setTime] = useState(countDown());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(countDown());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timeSplit = (str) => (str.length === 1 ? "0" : str[0]);

    return (
        <section className={styles.home}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={open ? "open" : "visible"}
                className={styles.homeContainer}
            >
                <div className={styles.homeTitle}>
                    <p>UPCOMING</p>
                    <h2>{data.name.toUpperCase()} MISSION</h2>
                    <button
                        onClick={() => {
                            getOpen();
                        }}
                    >
                        {open ? "CLOSE" : "SEE MORE"}
                    </button>
                </div>
                <div className={styles.homeCountdown}>
                    <div className={styles.homeUnit}>
                        <p>DAYS</p>
                        <div className={styles.homeCount}>
                            <div className={styles.box}>
                                <span>{timeSplit(time.days)}</span>
                            </div>
                            <div className={styles.box}>
                                <span>
                                    {time.days.length === 1
                                        ? time.days
                                        : time.days[1]}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeUnit}>
                        <p>HOURS</p>
                        <div className={styles.homeCount}>
                            <div className={styles.box}>
                                <span>{timeSplit(time.hours)}</span>
                            </div>
                            <div className={styles.box}>
                                <span>
                                    {time.hours.length === 1
                                        ? time.hours
                                        : time.hours[1]}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeUnit}>
                        <p>MINS</p>
                        <div className={styles.homeCount}>
                            <div className={styles.box}>
                                <span>{timeSplit(time.minutes)}</span>
                            </div>
                            <div className={styles.box}>
                                <span>
                                    {time.minutes.length === 1
                                        ? time.minutes
                                        : time.minutes[1]}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeUnit}>
                        <p>SECS</p>
                        <div className={styles.homeCount}>
                            <div className={styles.box}>
                                <span>{timeSplit(time.seconds)}</span>
                            </div>
                            <div className={styles.box}>
                                <span>
                                    {time.seconds.length === 1
                                        ? time.seconds
                                        : time.seconds[1]}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <HomeDescription
                descriptionVariants={descriptionVariants}
                open={open}
                data={data}
            />
        </section>
    );
};

export default Home;
