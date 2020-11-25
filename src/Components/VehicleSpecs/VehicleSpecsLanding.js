import React, { useState } from "react";
import Falcon9 from "./Vehicles/Falcon9";
import Falconheavy from "./Vehicles/Falconheavy";
import Dragon from "./Vehicles/Dragon";
import Starship from "./Vehicles/Starship";
import styles from "../../CSS/VehicleSpecs.module.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const VehicleSpecsLanding = ({ vehicleSelection, vehicleData }) => {
    const [page, setPage] = useState(1);

    // Event Handler for switching between Vehicle spec panel pages

    const handleSpecPage = (e) => {
        page === 2 ? setPage(1) : setPage(2);
    };
    
    const location = useLocation();

    // Variants for animation

    const containerVariants = {
        hidden: {
            x: 200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "tween",
            },
        },
        exit: {
            x: 200,
            opacity: 0,
            transition: {
                duration: 0.3,
                type: "tween",
            },
        },
    };

    return (
        <main className={styles.landing}>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location}>
                    <Route path="/vehicles/falcon9/">
                        <Falcon9
                            page={page}
                            handleSpecPage={handleSpecPage}
                            vehicleSelection={vehicleSelection}
                            vehicleData={vehicleData}
                            containerVariants={containerVariants}
                            
                        />
                    </Route>
                    <Route path="/vehicles/falconheavy">
                        <Falconheavy
                            page={page}
                            handleSpecPage={handleSpecPage}
                            vehicleSelection={vehicleSelection}
                            vehicleData={vehicleData}
                            containerVariants={containerVariants}
                        />
                    </Route>
                    <Route path="/vehicles/dragon">
                        <Dragon
                            page={page}
                            handleSpecPage={handleSpecPage}
                            vehicleSelection={vehicleSelection}
                            vehicleData={vehicleData}
                            containerVariants={containerVariants}
                        />
                    </Route>
                    <Route path="/vehicles/starship">
                        <Starship
                            page={page}
                            handleSpecPage={handleSpecPage}
                            vehicleSelection={vehicleSelection}
                            vehicleData={vehicleData}
                            containerVariants={containerVariants}
                        />
                    </Route>
                </Switch>
            </AnimatePresence>
        </main>
    );
};

export default VehicleSpecsLanding;
