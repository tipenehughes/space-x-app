import React from "react";
import MissionTable from "./MissionTable/MissionTable";
import MissionStats from "./MissionStats/MissionStats";
import MissionsNav from "./MissionsNav/MissionsNav";
import Filter from "./Filter/Filter";
import styles from "./Missions.module.css";

const Missions = ({
    handlePageCounterUp,
    handlePageCounterDown,
    pageCount,
    pageAmount,
    handleSetPageCount,
}) => {
    return (
        <section className={styles.missions}>
            <div className={styles.container}>
                <MissionStats />
                <Filter />
                <div className={styles.missionInfo}>
                    <MissionsNav
                        handlePageCounterUp={handlePageCounterUp}
                        handlePageCounterDown={handlePageCounterDown}
                        pageCount={pageCount}
                        pageAmount={pageAmount}
                        handleSetPageCount={handleSetPageCount}
                    />
                    <MissionTable />
                </div>
            </div>
        </section>
    );
};

export default Missions;
