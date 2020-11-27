import React from "react";
import TableData from "./TableData";
import MediaData from "./MediaData";
import InfoModalNav from "./InfoModalNav";
import styles from "../../../CSS/InfoModal.module.css";

const InfoModalInterior = ({
    data,
    unixConverter,
    handleInfoModalPage,
    page,
    stopPropagation,
}) => {
    return (
        <div className={styles.infoContainer} onClick={stopPropagation}>
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
            <InfoModalNav
                handleInfoModalPage={handleInfoModalPage}
                page={page}
            />
        </div>
    );
};

export default InfoModalInterior;
