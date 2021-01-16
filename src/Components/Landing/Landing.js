import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { MissionProvider } from "../../Context/MissionsContext";
import { VehicleSpecsContext } from "../../Context/VehicleSpecsContext";

import NavBar from "../Navigation/NavBar";
import MobileNavBar from "../Navigation/MobileNavigation/MobileNavBar";
import HomeLogic from "../HomePage/HomeLogic";
import VehicleSpecsLanding from "../VehicleSpecs/VehicleSpecsLanding";
import MissionLogic from "../Missions/MissionLogic";
import VideoModal from "../VideoModal/VideoModal";

import styles from "./Landing.module.css";

const Landing = () => {
    const {
        vehicleData,
        setVehicleData,
        vehicleSelection,
        setVehicleSelection,
    } = useContext(VehicleSpecsContext);

    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);

    // Used to set state using vehicle name from route pathname
    const getVehicleSelection = () => {
        const locationStr = history.location.pathname.toString();
        if (locationStr.includes("/vehicles/")) {
            const vehicle = locationStr
                .replace("/vehicles/", "")
                .split("/")[0]
                .toString();
            setVehicleSelection(vehicle);
        }
    };

    useEffect(() => {
        history.listen(getVehicleSelection);
    }, [history]);

    useEffect(() => {
        getVehicleData();
    }, []);

    const getVehicleData = async () => {
        const falcon9 = fetch(
            "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec"
        );
        const falconHeavy = fetch(
            "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed"
        );
        const starship = fetch(
            "https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee"
        );
        const dragon = fetch(
            "https://api.spacexdata.com/v4/dragons/5e9d058859b1ffd8e2ad5f90"
        );
        await Promise.all([falcon9, falconHeavy, starship, dragon])
            .then((responses) => {
                return Promise.all(
                    responses.map((response) => {
                        return response.json();
                    })
                );
            })
            .then((data) => {
                setVehicleData(data);
                setIsLoading(false);
            });
    };

    const vehicleSpecDisplay = (
        <Route path="/vehicles">
            <VehicleSpecsLanding
                vehicleSelection={vehicleSelection}
                vehicleData={vehicleData}
            />
        </Route>
    );

    return (
        <div className={styles.landing}>
            <NavBar />
            <MobileNavBar />
            <Switch>
                <Route exact path="/">
                    <HomeLogic />
                </Route>
                {!isLoading && vehicleSpecDisplay}
                <Route path="/missions">
                    <MissionProvider>
                        <MissionLogic />
                    </MissionProvider>
                </Route>
            </Switch>
            <Route path="/vehicles/:vehicle/:video">
                <VideoModal />
            </Route>
        </div>
    );
};

export default Landing;
