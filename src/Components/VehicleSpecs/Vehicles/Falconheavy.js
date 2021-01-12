import React from "react";
import { motion } from "framer-motion";
import VehicleSpecsNav from "../VehicleSpecsNav";
import SpecsFirstPage from "./SpecsFirstPage";
import SpecsSecondPage from "./SpecsSecondPage";
import FH from "../../../Assets/img/FH.png";

import styles from "../../../CSS/VehicleSpecs.module.css";

const Falconheavy = ({
    page,
    handleSpecPage,
    vehicleSelection,
    vehicleData,
    containerVariants,
}) => {

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"            
            className={styles.vehicleSpecs}
        >
            <div className={styles.specs}>
                <div>
                    <div className={styles.vehicleTitle}>
                        <h3>{vehicleData.name.toUpperCase()}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? (
                    <SpecsFirstPage
                        selectionData={vehicleData}
                        vehicleSelection={vehicleSelection}
                    />
                ) : (
                    <SpecsSecondPage
                        selectionData={vehicleData}
                        vehicleSelection={vehicleSelection}
                    />
                )}
                <VehicleSpecsNav page={page} handleSpecPage={handleSpecPage} />
            </div>
            <div className={styles.vehicleImage}>
                <img src={FH} alt={`Falcon 9 vehicle`} />
            </div>
        </motion.section>
    );
};

export default Falconheavy;
