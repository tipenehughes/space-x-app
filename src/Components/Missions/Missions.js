import React from "react";
import MissionData from "./MissionData";
import Filter from "./Filter/Filter";
import SubFilter from "./Filter/SubFilter";
import styles from "../../CSS/Missions.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import CountUp from "react-countup";

const Missions = ({
    launchData,
    handlePageCounterUp,
    handlePageCounterDown,
    handleSetIndex,
    handleSetFilterDisplay,
    handleSetSubFilter,
    handleFilterChoice,
    handleFilterSelected,
    handleClearFilter,
    outcome,
    dataCounter,
    unixConverter,
    pageCount,
    filterDisplay,
    subFilter,
    filterOptions,
    pageAmount,
    handleSetPageCount,
}) => {
    const filterVariants = {
        hidden: {
            scaleY: 0,
        },
        visible: {
            scaleY: 1,
            transition: {
                duration: 0.2,
                type: "tween",
            },
        },
    };
    const subFilterVariants = {
        hidden: {
            scaleY: 0,
        },
        visible: {
            scaleY: 1,
            transition: {
                duration: 0.2,
                type: "tween",
            },
        },
    };

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
                <div className={styles.totalStats}>
                    <div className={styles.totalLaunches}>
                        <div className={styles.number}>
                            <h3>
                                <CountUp
                                    end={dataCounter.launches}
                                    duration={1}
                                />
                            </h3>
                        </div>
                        <div className={styles.subHeading}>
                            <h4>TOTAL LAUNCHES</h4>
                        </div>
                    </div>
                    <div className={styles.totalLaunches}>
                        <div className={styles.number}>
                            <h3>
                                <CountUp
                                    end={dataCounter.landings}
                                    duration={1}
                                />
                            </h3>
                        </div>
                        <div className={styles.subHeading}>
                            <h4>TOTAL LANDINGS</h4>
                        </div>
                    </div>
                    <div className={styles.totalLaunches}>
                        <div className={styles.number}>
                            <h3>
                                <CountUp
                                    end={dataCounter.reflown}
                                    duration={1}
                                />
                            </h3>
                        </div>
                        <div className={styles.subHeading}>
                            <h4>REFLOWN ROCKETS</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.filter}>
                    <div className={styles.filterSelected}>
                        <button
                            className={styles.filterBtn}
                            onClick={(e) => handleSetFilterDisplay(e)}
                            style={{
                                backgroundColor:
                                    filterDisplay && "var(--space-x-blue)",
                            }}
                        >
                            FILTER
                        </button>
                        {filterOptions.selected.vehicles && (
                            <button
                                className={styles.selected}
                                onClick={() =>
                                    handleClearFilter(
                                        filterOptions.selected.vehicles
                                    )
                                }
                            >
                                {filterOptions.selected.vehicles}
                            </button>
                        )}
                        {filterOptions.selected["Launch Site"] && (
                            <button
                                className={styles.selected}
                                onClick={() =>
                                    handleClearFilter(
                                        filterOptions.selected["Launch Site"]
                                    )
                                }
                            >
                                {filterOptions.selected["Launch Site"]}
                            </button>
                        )}
                        {filterOptions.selected.outcome && (
                            <button
                                className={styles.selected}
                                onClick={() =>
                                    handleClearFilter(
                                        filterOptions.selected.outcome
                                    )
                                }
                            >
                                {filterOptions.selected.outcome === "true"
                                    ? "SUCCESS"
                                    : "FAILURE"}
                            </button>
                        )}
                    </div>
                    {filterDisplay && (
                        <motion.div
                            variants={filterVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Filter
                                handleSetSubFilter={handleSetSubFilter}
                                handleFilterChoice={handleFilterChoice}
                                filterOptions={filterOptions}
                                handleClearFilter={handleClearFilter}
                                subFilter={subFilter}
                            />
                        </motion.div>
                    )}
                    {subFilter && (
                        <motion.div
                            variants={subFilterVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <SubFilter
                                filterOptions={filterOptions}
                                handleFilterSelected={handleFilterSelected}
                            />
                        </motion.div>
                    )}
                </div>

                <div className={styles.missionInfo}>
                    <MissionData
                        launchData={launchData}
                        outcome={outcome}
                        unixConverter={unixConverter}
                        handleSetIndex={handleSetIndex}
                        key={pageCount}
                    />
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
