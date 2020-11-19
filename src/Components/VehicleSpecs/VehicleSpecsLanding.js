import React, { useState } from "react";
import VehicleSpecs from "./VehicleSpecsNav";
import Falcon9 from "./Falcon9";
import Falconheavy from "./Falconheavy";
import Dragon from "./Dragon";
import Starship from "./Starship";
import styles from "../../CSS/VehicleSpecs.module.css";
import { Route, Switch } from "react-router-dom";

const VehicleSpecsLanding = ({ vehicleSelection, vehicleData }) => {
    const [page, setPage] = useState(1);

    // Event Handler for switching between Vehicle spec panel pages

    const handleSpecPage = (e) => {
        page === 2 ? setPage(1) : setPage(2);
    };

    return (
        <main className={styles.landing}>
            <Switch>
                <Route path="/vehicles/falcon9">
                    <Falcon9
                        page={page}
                        handleSpecPage={handleSpecPage}
                        vehicleSelection={vehicleSelection}
                        vehicleData={vehicleData}
                    />
                </Route>
                <Route path="/vehicles/falconheavy">
                    <Falconheavy
                        page={page}
                        handleSpecPage={handleSpecPage}
                        vehicleSelection={vehicleSelection}
                        vehicleData={vehicleData}
                    />
                </Route>
                <Route path="/vehicles/dragon">
                    <Dragon
                        page={page}
                        handleSpecPage={handleSpecPage}
                        vehicleSelection={vehicleSelection}
                        vehicleData={vehicleData}
                    />
                </Route>
                <Route path="/vehicles/starship">
                    <Starship
                        page={page}
                        handleSpecPage={handleSpecPage}
                        vehicleSelection={vehicleSelection}
                        vehicleData={vehicleData}
                    />
                </Route>
            </Switch>
            {/* <VehicleSpecs
                page={page}
                handleSpecPage={handleSpecPage}
                vehicleSelection={vehicleSelection}
                vehicleData={vehicleData}
            /> */}
        </main>
    );
};

export default VehicleSpecsLanding;
