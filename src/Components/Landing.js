import React from "react";
import NavBar from "./NavBar";
import VehicleSpecsLanding from "./VehicleSpecs/VehicleSpecsLanding";

import styles from "../CSS/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.landing}>
            <NavBar />
            <VehicleSpecsLanding />
        </div>
    );
};

export default Landing;
