import React, { useContext } from "react";
import { MissionContext } from "../../../Context/MissionsContext";
import CountUp from "react-countup";
import styles from "./MissionStats.module.css";

const MissionStats = () => {
    const { dataCounter } = useContext(MissionContext);
    return (
        <div className={styles.totalStats}>
            <div className={styles.totalLaunches}>
                <div className={styles.number}>
                    <h3>
                        <CountUp end={dataCounter.launches} duration={1} />
                    </h3>
                </div>
                <div className={styles.subHeading}>
                    <h4>TOTAL LAUNCHES</h4>
                </div>
            </div>
            <div className={styles.totalLaunches}>
                <div className={styles.number}>
                    <h3>
                        <CountUp end={dataCounter.landings} duration={1} />
                    </h3>
                </div>
                <div className={styles.subHeading}>
                    <h4>TOTAL LANDINGS</h4>
                </div>
            </div>
            <div className={styles.totalLaunches}>
                <div className={styles.number}>
                    <h3>
                        <CountUp end={dataCounter.reflown} duration={1} />
                    </h3>
                </div>
                <div className={styles.subHeading}>
                    <h4>REFLOWN ROCKETS</h4>
                </div>
            </div>
        </div>
    );
};

export default MissionStats;
