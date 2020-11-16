import React from "react";

import styles from "../../CSS/VehicleSpecs.module.css";
import vehicleImg from "../../Assets/img/F9.png";

const VehicleImage = () => {
    return (
        <div className={styles.vehicleImage}>
            <img src={vehicleImg} alt="Falcon 9 vehicle image" />
        </div>
    );
};

export default VehicleImage;
