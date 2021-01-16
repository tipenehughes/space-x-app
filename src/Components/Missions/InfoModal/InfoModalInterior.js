import React, { useContext } from "react";
import { MissionContext } from "../../../Context/MissionsContext";

import TableData from "./TableData";
import MediaData from "./MediaData";
import InfoModalNav from "./InfoModalNav";
import styles from "./InfoModal.module.css";

const InfoModalInterior = () => {
    const { unixConverter, missionData, rowIndex, page } = useContext(
        MissionContext
    );
    const data = missionData[rowIndex];

    return (
        <div
            className={styles.infoContainer}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.infoHeader}>
                <div>
                    <div className={styles.vehicleTitle}>
                        <h3>{data.mission_name}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                <div className={styles.missionPatch}>
                    <img src={data.links.mission_patch_small} alt="#" />
                </div>
            </div>
            {page === 1 && (
                <TableData data={data} unixConverter={unixConverter} />
            )}
            {page === 2 && <MediaData data={data} />}
            <InfoModalNav />
        </div>
    );
};

export default InfoModalInterior;
