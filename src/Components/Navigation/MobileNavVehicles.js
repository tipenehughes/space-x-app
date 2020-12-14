import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "../../CSS/MobileNavVehicles.module.css";

const MobileNavVehicles = ({ handleVehicleSelection, navVariants }) => {
    const location = useLocation();
    return (
        
            <motion.div
                className={styles.navVehiclesContainer}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                
                
            >
                <div className={styles.navVehicles}>
                    <div
                        className={styles.navLinks}
                        onClick={handleVehicleSelection}
                    >
                        <Link to="/vehicles/falcon9">
                            <h2>FALCON 9</h2>
                        </Link>
                    </div>
                    <div
                        className={styles.navLinks}
                        onClick={handleVehicleSelection}
                    >
                        <Link to="/vehicles/falconheavy">
                            <h2>FALCON HEAVY</h2>
                        </Link>
                    </div>
                    <div
                        className={styles.navLinks}
                        onClick={handleVehicleSelection}
                    >
                        <Link to="/vehicles/dragon">
                            <h2>DRAGON</h2>
                        </Link>
                    </div>
                    <div
                        className={styles.navLinks}
                        onClick={handleVehicleSelection}
                    >
                        <Link to="/vehicles/starship">
                            <h2>STARSHIP</h2>
                        </Link>
                    </div>
                </div>
            </motion.div>
        
    );
};

export default MobileNavVehicles;
