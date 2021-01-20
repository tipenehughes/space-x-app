import React, { useContext } from "react";
import { VehicleSpecsContext } from "../../../Context/VehicleSpecsContext";
import { motion } from "framer-motion";
import VehicleSpecsNav from "../VehicleSpecsNav/VehicleSpecsNav";
import SpecsFirstPage from "../InfoPages/SpecsFirstPage";
import SpecsSecondPage from "../InfoPages/SpecsSecondPage";

import F9 from "../../../Assets/img/F9.png";
import FH from "../../../Assets/img/FH.png";
import D2 from "../../../Assets/img/D2.png";
import SS from "../../../Assets/img/SS.png";

import styles from "./Vehicles.module.css";

const Vehicles = ({ index }) => {
    const { vehicleData, page, containerVariants } = useContext(
        VehicleSpecsContext
    );

    const vehicleImage = [F9, FH, SS, D2];

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={styles.vehicleSpecs}
            key={index}
        >
            <div className={styles.specs}>
                <div>
                    <div className={styles.vehicleTitle}>
                        <h3>{vehicleData[index].name.toUpperCase()}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? (
                    <SpecsFirstPage selectionData={vehicleData[index]} />
                ) : (
                    <SpecsSecondPage selectionData={vehicleData[index]} />
                )}
                <VehicleSpecsNav />
            </div>
            <div className={styles.vehicleImage}>
                <img
                    src={vehicleImage[index]}
                    style={{ height: index === 3 ? "30%" : null }}
                    alt={`${vehicleData[index].name} vehicle`}
                />
            </div>
        </motion.section>
    );
};

export default Vehicles;
