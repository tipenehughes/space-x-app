import React from "react";
import VehicleSpecsNav from "./VehicleSpecsNav";
import SpecsFirstPage from "./SpecsFirstPage";
import SpecsSecondPage from "./SpecsSecondPage";
import D2 from "../../Assets/img/D2.png";

import styles from "../../CSS/VehicleSpecs.module.css";

const Dragon = ({ page, handleSpecPage, vehicleSelection, vehicleData }) => {
    let selectionData = vehicleData[1];

    return (
        <section className={styles.vehicleSpecs}>
            <div className={styles.specs}>
                <div>
                    <div className={styles.vehicleTitle}>
                        <h3>{selectionData.name.toUpperCase()}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? (
                    <SpecsFirstPage
                        selectionData={selectionData}
                        vehicleSelection={vehicleSelection}
                    />
                ) : (
                    <SpecsSecondPage
                        selectionData={selectionData}
                        vehicleSelection={vehicleSelection}
                    />
                )}
                <VehicleSpecsNav page={page} handleSpecPage={handleSpecPage} />
            </div>
            <div className={styles.vehicleImage}>
                <img
                    src={D2}
                    alt={`Dragon 2 vehicle image`}
                    style={{ height: "30%" }}
                />
            </div>
        </section>
    );
};

export default Dragon;
