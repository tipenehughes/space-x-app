import React from "react";
import VehicleSpecsNav from "./VehicleSpecsNav";
import SpecsFirstPage from "./SpecsFirstPage";
import SpecsSecondPage from "./SpecsSecondPage";

import styles from "../../CSS/VehicleSpecs.module.css";

const VehicleInteriorData = (
    page,
    handleSpecPage,
    vehicleSelection,
    selectionData
) => {
    return (
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
    );
};

export default VehicleInteriorData;
