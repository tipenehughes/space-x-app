import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import VehicleSpecsLanding from "./VehicleSpecs/VehicleSpecsLanding";
import VideoModal from "../Components/VideoModal/VideoModal";
import { Route } from "react-router-dom";

import data from "../data.json";
import styles from "../CSS/Landing.module.css";

const Landing = () => {
    const [vehicleData, setVehicleData] = useState({});
    const [vehicleSelection, setVehicleSelection] = useState("falcon9");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getVehicleData();
        VehicleSpecsDisplay();
    }, [vehicleSelection]);

    // API call for vehicle data

    const getVehicleData = async () => {
        const rockets = fetch("https://api.spacexdata.com/v4/rockets");
        const dragons = fetch(
            "https://api.spacexdata.com/v4/dragons/5e9d058859b1ffd8e2ad5f90"
        );
        await Promise.all([rockets, dragons])
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

    // Event handler to set state for Vehicle spec display

    const handleVehicleSelection = (e) => {
        e.preventDefault();
        let originalText = e.target.innerText;
        const newText = originalText.replace(/ /g, "").toLowerCase();

        setVehicleSelection(newText);
    };

    // Determines whether to display Vehicle Spec Panel based on API data being loaded and isLoading = false

    const VehicleSpecsDisplay = () => {
        return isLoading ? null : (
            <Route path="/vehicles">
                <VehicleSpecsLanding
                    vehicleSelection={vehicleSelection}
                    vehicleData={vehicleData}
                />
            </Route>
        );
    };

    return (
        <div className={styles.landing}>
            <NavBar handleVehicleSelection={handleVehicleSelection} />
            {VehicleSpecsDisplay()}
            <Route path="/vehicles/:vehicle/:video">
                <VideoModal vehicleSelection={vehicleSelection} />
            </Route>
        </div>
    );
};

export default Landing;
