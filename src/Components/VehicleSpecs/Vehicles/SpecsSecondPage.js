import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../CSS/VehicleSpecs.module.css";

const SpecsSecondPage = ({
    selectionData: {
        first_flight,
        cost_per_launch,
        engines,
        payload_weights,
        thrusters,
    },
    vehicleSelection,
}) => {
    const setVehicleDisplay = () => {
        return vehicleSelection === "dragon" ? (
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>FIRST LAUNCH</td>
                        <td>{first_flight}</td>
                    </tr>
                    <tr>
                        <td>TOTAL LAUNCHES</td>
                        <td>98</td>
                    </tr>
                    <tr>
                        <td>ENGINES</td>
                        <td>
                            {`${thrusters[0].amount} + ${thrusters[1].amount}`}{" "}
                            <span>
                                /{" "}
                                {`${thrusters[0].type.toUpperCase()} + ${thrusters[1].type.toUpperCase()}`}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>COST PER LAUNCH</td>
                        <td>
                            $50 m REUSED <span>/ $60 m NEW</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>FIRST LAUNCH</td>
                        <td>{first_flight}</td>
                    </tr>
                    <tr>
                        <td>TOTAL LAUNCHES</td>
                        <td>98</td>
                    </tr>
                    <tr>
                        <td>ENGINES</td>
                        <td>
                            {engines.number}{" "}
                            <span>/ {engines.type.toUpperCase()}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>COST PER LAUNCH</td>
                        <td>
                            $50 m REUSED <span>/ $60 m NEW</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    };
    return (
        <>
            {setVehicleDisplay()}
            <div className={styles.videoBtns}>
                <button>
                    <Link to={`/vehicles/${vehicleSelection}/first-flight`}>
                        FIRST FLIGHT
                    </Link>
                </button>
                <button>
                    <Link
                        to={`/vehicles/${vehicleSelection}/${
                            vehicleSelection === "dragon"
                                ? "first-crew-launch"
                                : "first-landing"
                        }`}
                    >
                        {vehicleSelection === "dragon"
                            ? "FIRST CREW LAUNCH"
                            : "FIRST LANDING"}
                    </Link>
                </button>
                <button>
                    <Link to={`/vehicles/${vehicleSelection}/latest-mission`}>
                        LATEST MISSION
                    </Link>
                </button>
            </div>
        </>
    );
};

export default SpecsSecondPage;
