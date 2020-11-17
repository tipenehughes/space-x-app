import React from "react";
import VehicleName from "./VehicleName";
import SpecsFirstPage from "./SpecsFirstPage";
import SpecsSecondPage from "./SpecsSecondPage";
import VehicleImage from "./VehicleImage";

import styles from "../../CSS/VehicleSpecs.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

const VehicleSpecs = ({
    page,
    handleSpecPage,
    vehicleSelection,
    vehicleData,
}) => {
    let selectionData = [];

    switch (vehicleSelection) {
        case "FALCON 9":
            selectionData = vehicleData[0][1];
            break;
        case "FALCON HEAVY":
            selectionData = vehicleData[0][2];
            break;
        case "DRAGON":
            selectionData = vehicleData[1];
            break;
        case "STARSHIP":
            selectionData = vehicleData[0][3];
            break;
        default:
            selectionData = [];
    }

    return (
        <section className={styles.vehicleSpecs}>
            <div className={styles.specs}>
                <div>
                    <VehicleName selectionData={selectionData} />
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? (
                    <SpecsFirstPage
                        selectionData={selectionData}
                        vehicleSelection={vehicleSelection}
                    />
                ) : (
                    <SpecsSecondPage
                        selectionData={selectionData}
                        vehicleSelection={vehicleSelection}
                    />
                )}
                <div className={styles.specsNav}>
                    <button className={styles.leftBtn} onClick={handleSpecPage}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <div className={styles.midBtns}>
                        <button>
                            {page === 1 ? (
                                <FontAwesomeIcon icon={faCircle} />
                            ) : (
                                <FontAwesomeIcon icon={farCircle} />
                            )}
                        </button>
                        <button>
                            {page === 2 ? (
                                <FontAwesomeIcon icon={faCircle} />
                            ) : (
                                <FontAwesomeIcon icon={farCircle} />
                            )}
                        </button>
                    </div>
                    <button
                        className={styles.rightBtn}
                        onClick={handleSpecPage}
                    >
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                </div>
            </div>
            <VehicleImage vehicleSelection={vehicleSelection} />
        </section>
    );
};

export default VehicleSpecs;
