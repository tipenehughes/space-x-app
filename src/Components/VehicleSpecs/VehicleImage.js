import React from "react";

import styles from "../../CSS/VehicleSpecs.module.css";
import F9 from "../../Assets/img/F9.png";
import FH from "../../Assets/img/FH.png";
import D2 from "../../Assets/img/D2.png";
import SS from "../../Assets/img/SS.png";

const VehicleImage = ({ vehicleSelection }) => {
    let image = "";
    switch (vehicleSelection) {
        case "FALCON 9":
            image = F9;
            break;
        case "FALCON HEAVY":
            image = FH;
            break;
        case "DRAGON":
            image = D2;
            break;
        case "STARSHIP":
            image = SS;
            break;
        default:
            image = F9;
    }

    return (
        <div className={styles.vehicleImage}>
            <img src={image} alt={`${vehicleSelection} vehicle image`} />
        </div>
    );
};

export default VehicleImage;
