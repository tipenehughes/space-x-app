import React from "react";
import { Route, Switch } from "react-router-dom";
import Falcon9 from "./Vehicles/Falcon9";
import Falconheavy from "./Vehicles/Falconheavy";
import Dragon from "./Vehicles/Dragon";
import Starship from "./Vehicles/Starship";

import styles from "./VehicleSpecs.module.css";

const VehicleSpecsLanding = () => {
    return (
        <main className={styles.landing}>
            <Switch>
                <Route path="/vehicles/falcon9">
                    <Falcon9 />
                </Route>
                <Route path="/vehicles/falconheavy">
                    <Falconheavy />
                </Route>
                <Route path="/vehicles/dragon">
                    <Dragon />
                </Route>
                <Route path="/vehicles/starship">
                    <Starship />
                </Route>
            </Switch>
        </main>
    );
};

export default VehicleSpecsLanding;
