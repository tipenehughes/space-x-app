import React, { useContext } from "react";
import { VehicleSpecsContext } from "../../../Context/VehicleSpecsContext";
import { motion } from "framer-motion";
import VehicleSpecsNav from "../VehicleSpecsNav";
import SpecsFirstPage from "../InfoPages/SpecsFirstPage";
import SpecsSecondPage from "../InfoPages/SpecsSecondPage";
import SS from "../../../Assets/img/SS.png";

import styles from "../VehicleSpecs.module.css";

const Starship = () => {
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
                        <h3>{vehicleData[2].name.toUpperCase()}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? (
                    <SpecsFirstPage selectionData={vehicleData[2]} />
                ) : (
                    <SpecsSecondPage selectionData={vehicleData[2]} />
                )}
                <VehicleSpecsNav />
            </div>
            <div className={styles.vehicleImage}>
                <img src={SS} alt={`Starship vehicle`} />
            </div>
        </motion.section>
    );
};

export default Starship;
