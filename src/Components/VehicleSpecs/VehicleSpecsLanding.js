import React, { useState } from "react";
import VehicleSpecs from "./VehicleSpecs";
import styles from "../../CSS/VehicleSpecs.module.css";

const VehicleSpecsLanding = () => {
    const [page, setPage] = useState(1);

    const handleSpecPage = (e) => {
        page === 2 ? setPage(1) : setPage(2);
    };

    return (
        <main className={styles.landing}>
            <VehicleSpecs page={page} onClick={handleSpecPage} />
        </main>
    );
};

export default VehicleSpecsLanding;
