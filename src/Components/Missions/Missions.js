import React from "react";
import MissionData from "./MissionData";
import Filter from "./Filter/Filter";
import SubFilter from "./Filter/SubFilter";
import styles from "../../CSS/Missions.module.css";
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
    unixConverter,
    pageCount,
    filterDisplay,
    subFilter,
    filterOptions,
}) => {
    return (
        <section className={styles.missions}>
            <div className={styles.totalStats}>
                <div className={styles.totalLaunches}>
                    <div className={styles.number}>
                        <h3>
                            <CountUp end={101} duration={1} />
                        </h3>
                    </div>
                    <div className={styles.subHeading}>
                        <h4>TOTAL LAUNCHES</h4>
                    </div>
                </div>
                <div className={styles.totalLaunches}>
                    <div className={styles.number}>
                        <h3>
                            <CountUp end={64} duration={1} />
                        </h3>
                    </div>
                    <div className={styles.subHeading}>
                        <h4>TOTAL LANDINGS</h4>
                    </div>
                </div>
                <div className={styles.totalLaunches}>
                    <div className={styles.number}>
                        <h3>
                            <CountUp end={45} duration={1} />
                        </h3>
                    </div>
                    <div className={styles.subHeading}>
                        <h4>REFLOWN ROCKETS</h4>
                    </div>
                </div>
            </div>
            <div className={styles.filter}>
                <button
                    className={styles.filterBtn}
                    onClick={handleSetFilterDisplay}
                    style={{
                        backgroundColor: filterDisplay && "var(--space-x-blue)",
                    }}
                >
                    FILTER
                </button>
                {filterDisplay && (
                    <Filter
                        handleSetSubFilter={handleSetSubFilter}
                        handleFilterChoice={handleFilterChoice}
                        filterOptions={filterOptions}
                        handleClearFilter={handleClearFilter}
                        subFilter={subFilter}
                    />
                )}
                {subFilter && (
                    <SubFilter
                        filterOptions={filterOptions}
                        handleFilterSelected={handleFilterSelected}
                    />
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
                        className={styles.leftBtn}
                        onClick={handlePageCounterDown}
                    >
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <div className={styles.midBtns}>
                        <button>
                            <FontAwesomeIcon icon={faCircle} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={farCircle} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={farCircle} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={farCircle} />
                        </button>
                    </div>
                    <button
                        className={styles.rightBtn}
                        onClick={handlePageCounterUp}
                    >
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Missions;
