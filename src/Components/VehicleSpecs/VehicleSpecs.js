import React from "react";
import VehicleName from "./VehicleName";
import SpecsFirstPage from "./SpecsFirstPage";
import SpecsSecondPage from "./SpecsSecondPage";
import VehicleImage from "./VehicleImage";

import vehicleImg from "../../Assets/img/F9.png";
import styles from "../../CSS/VehicleSpecs.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
// import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

const VehicleSpecs = ({ page, onClick }) => {
    return (
        <section className={styles.vehicleSpecs}>
            <div className={styles.specs}>
                <div>
                    <VehicleName />
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? <SpecsFirstPage /> : <SpecsSecondPage />}
                <div className={styles.specsNav}>
                    <button className={styles.leftBtn} onClick={onClick}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <div className={styles.midBtns}>
                        <button>
                            {page === 1 ? (
                                <FontAwesomeIcon icon={faCircle} />
                            ) : (
                                <FontAwesomeIcon icon={faCircle} />
                            )}
                        </button>
                        <button>
                            {page === 2 ? (
                                <FontAwesomeIcon icon={faCircle} />
                            ) : (
                                <FontAwesomeIcon icon={faCircle} />
                            )}
                        </button>
                    </div>
                    <button className={styles.rightBtn} onClick={onClick}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                </div>
            </div>
            <VehicleImage />
        </section>
    );
};

export default VehicleSpecs;
