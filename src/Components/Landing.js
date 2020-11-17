import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import VehicleSpecsLanding from "./VehicleSpecs/VehicleSpecsLanding";

import styles from "../CSS/Landing.module.css";

const Landing = () => {
    const [vehicleData, setVehicleData] = useState({});
    const [vehicleSelection, setVehicleSelection] = useState("");

    useEffect(() => {
        getVehicleData();
        vehicleSpecsDisplay();
    }, []);

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
            });
    };

    // Event handler to set state for Vehicle spec display

    const handleVehicleSelection = (e) => {
        e.preventDefault();
        setVehicleSelection(e.target.innerText);
    };

    const vehicleSpecsDisplay = () => {
        return vehicleSelection === "" ? (
            <></>
        ) : (
            <VehicleSpecsLanding
                vehicleSelection={vehicleSelection}
                vehicleData={vehicleData}
            />
        );
    };

    return (
        <div className={styles.landing}>
            <NavBar
                handleVehicleSelection={handleVehicleSelection}
            />
            {vehicleSpecsDisplay()}
        </div>
    );
};

export default Landing;
