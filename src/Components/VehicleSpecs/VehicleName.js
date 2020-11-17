import React from "react";
import styles from "../../CSS/VehicleSpecs.module.css";

const VehicleName = ({ selectionData }) => {
    return (
        <div className={styles.vehicleTitle}>
            <h3>{selectionData.name}</h3>
        </div>
    );
};

export default VehicleName;
