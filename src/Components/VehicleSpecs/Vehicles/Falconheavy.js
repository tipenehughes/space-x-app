import React, { useContext } from "react";
import { VehicleSpecsContext } from "../../../Context/VehicleSpecsContext";
import { motion } from "framer-motion";
import VehicleSpecsNav from "../VehicleSpecsNav";
import SpecsFirstPage from "../InfoPages/SpecsFirstPage";
import SpecsSecondPage from "../InfoPages/SpecsSecondPage";
import FH from "../../../Assets/img/FH.png";

import styles from "../VehicleSpecs.module.css";

const Falconheavy = () => {
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
                        <h3>{vehicleData[1].name.toUpperCase()}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? (
                    <SpecsFirstPage selectionData={vehicleData[1]} />
                ) : (
                    <SpecsSecondPage selectionData={vehicleData[1]} />
                )}
                <VehicleSpecsNav />
            </div>
            <div className={styles.vehicleImage}>
                <img src={FH} alt={`Falcon 9 vehicle`} />
            </div>
        </motion.section>
    );
};

export default Falconheavy;
