import React from "react";
import { Link } from "react-router-dom";
import styles from "../VehicleSpecs.module.css";

const SpecsSecondPageDragon = ({
    selectionData: { first_flight, thrusters },
    vehicleSelection,
}) => {
    return (
        <>
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
            <div className={styles.videoBtns}>
                <Link to={`/vehicles/${vehicleSelection}/first-flight`}>
                    <button>FIRST FLIGHT</button>
                </Link>
                <Link to={`/vehicles/${vehicleSelection}/first-crew-launch`}>
                    <button>FIRST CREW LAUNCH</button>
                </Link>
                <Link to={`/vehicles/${vehicleSelection}/latest-mission`}>
                    <button>LATEST MISSION</button>
                </Link>
            </div>
        </>
    );
};

export default SpecsSecondPageDragon;
