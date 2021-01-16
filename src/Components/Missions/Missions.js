import React from "react";
import MissionTable from "./MissionTable/MissionTable";
import MissionStats from "./MissionStats/MissionStats";
import Filter from "./Filter/Filter";
import styles from "./Missions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

const Missions = ({
    handlePageCounterUp,
    handlePageCounterDown,
    pageCount,
    pageAmount,
    handleSetPageCount,
}) => {    

    const buttons = [...Array(pageAmount + 1)].map((data, i) => {
        return (
            <button key={i} onClick={() => handleSetPageCount(i)}>
                {i === pageCount ? (
                    <FontAwesomeIcon icon={faCircle} />
                ) : (
                    <FontAwesomeIcon icon={farCircle} />
                )}
            </button>
        );
    });

    return (
        <section className={styles.missions}>
            <div className={styles.container}>
                <MissionStats />                
                <Filter />
                <div className={styles.missionInfo}>
                    <MissionTable />
                    <div className={styles.missionsNav}>
                        <button
                            className={`${styles.leftBtn} ${
                                pageCount === 0 ? styles.disabled : null
                            }`}
                            onClick={handlePageCounterDown}
                        >
                            <FontAwesomeIcon icon={faCaretLeft} />
                        </button>
                        <div className={styles.midBtns}>{buttons}</div>
                        <button
                            className={`${styles.rightBtn} ${
                                pageCount === pageAmount
                                    ? styles.disabled
                                    : null
                            }`}
                            onClick={handlePageCounterUp}
                        >
                            <FontAwesomeIcon icon={faCaretRight} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Missions;
