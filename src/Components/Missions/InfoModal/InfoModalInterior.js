import React from "react";
import TableData from "./TableData";
import InfoModalNav from "./InfoModalNav";
import styles from "../../../CSS/InfoModal.module.css";

const InfoModalInterior = ({ data, unixConverter, handleInfoModalPage }) => {
    return (
        <div className={styles.infoContainer}>
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
            <TableData data={data} unixConverter={unixConverter} />
            <InfoModalNav handleInfoModalPage={handleInfoModalPage} />
        </div>
    );
};

export default InfoModalInterior;
