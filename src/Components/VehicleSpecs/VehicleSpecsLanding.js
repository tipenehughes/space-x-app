import React from "react";
import VehicleSpecs from "./VehicleSpecs";
import styles from "../../CSS/VehicleSpecs.module.css";

const VehicleSpecsLanding = () => {
    return (
        <main className={styles.landing}>
            <VehicleSpecs />
        </main>
    );
};

export default VehicleSpecsLanding;
