import React, { useContext } from "react";
import { VehicleSpecsContext } from "../../../Context/VehicleSpecsContext";
import { motion } from "framer-motion";
import VehicleSpecsNav from "../VehicleSpecsNav";
import SpecsFirstPage from "../InfoPages/SpecsFirstPage";
import SpecsSecondPage from "../InfoPages/SpecsSecondPage";
import D2 from "../../../Assets/img/D2.png";

import styles from "../VehicleSpecs.module.css";

const Dragon = () => {
    const { vehicleData, page, containerVariants } = useContext(
        VehicleSpecsContext
    );

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
                        <h3>{vehicleData[3].name.toUpperCase()}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? (
                    <SpecsFirstPage selectionData={vehicleData[3]} />
                ) : (
                    <SpecsSecondPage selectionData={vehicleData[3]} />
                )}
                <VehicleSpecsNav />
            </div>
            <div className={styles.vehicleImage}>
                <img
                    src={D2}
                    alt={`Dragon 2 vehicle`}
                    style={{ height: "30%" }}
                />
            </div>
        </motion.section>
    );
};

export default Dragon;
