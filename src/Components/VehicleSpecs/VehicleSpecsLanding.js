import React, { useState } from "react";
import Falcon9 from "./Vehicles/Falcon9";
import Falconheavy from "./Vehicles/Falconheavy";
import Dragon from "./Vehicles/Dragon";
import Starship from "./Vehicles/Starship";
import styles from "./VehicleSpecs.module.css";
import { Route, Switch } from "react-router-dom";

const VehicleSpecsLanding = ({ vehicleSelection, vehicleData }) => {
    const [page, setPage] = useState(1);

    // Event Handler for switching between Vehicle spec panel pages

    const handleSpecPage = (e) => {
        page === 2 ? setPage(1) : setPage(2);
    }; 



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
    };

    return (
        <main className={styles.landing}>
            <Switch>
                <Route path="/vehicles/falcon9">
                    <Falcon9
                        page={page}
                        handleSpecPage={handleSpecPage}
                        vehicleSelection={vehicleSelection}
                        vehicleData={vehicleData[0]}
                        containerVariants={containerVariants}
                    />
                </Route>
                <Route path="/vehicles/falconheavy">
                    <Falconheavy
                        page={page}
                        handleSpecPage={handleSpecPage}
                        vehicleSelection={vehicleSelection}
                        vehicleData={vehicleData[1]}
                        containerVariants={containerVariants}
                    />
                </Route>
                <Route path="/vehicles/dragon">
                    <Dragon
                        page={page}
                        handleSpecPage={handleSpecPage}
                        vehicleSelection={vehicleSelection}
                        vehicleData={vehicleData[3]}
                        containerVariants={containerVariants}
                    />
                </Route>
                <Route path="/vehicles/starship">
                    <Starship
                        page={page}
                        handleSpecPage={handleSpecPage}
                        vehicleSelection={vehicleSelection}
                        vehicleData={vehicleData[2]}
                        containerVariants={containerVariants}
                    />
                </Route>
            </Switch>
        </main>
    );
};

export default VehicleSpecsLanding;
