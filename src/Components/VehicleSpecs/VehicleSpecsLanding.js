import React from "react";
import { Route, Switch } from "react-router-dom";
import Vehicles from "./Vehicles/Vehicles";

import styles from "./VehicleSpecsLanding.module.css";

const VehicleSpecsLanding = () => {
    return (
        <main className={styles.landing}>
            <Switch>
                <Route path="/vehicles/falcon9">
                    <Vehicles index={0} />
                </Route>
                <Route path="/vehicles/falconheavy">
                    <Vehicles index={1} />
                </Route>
                <Route path="/vehicles/dragon">
                    <Vehicles index={3} />
                </Route>
                <Route path="/vehicles/starship">
                    <Vehicles index={2} />
                </Route>
            </Switch>
        </main>
    );
};

export default VehicleSpecsLanding;
