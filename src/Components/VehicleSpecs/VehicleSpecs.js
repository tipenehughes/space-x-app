import React from "react";
import VehicleName from "./VehicleName";
import SpecsFirstPage from "./SpecsFirstPage";
import VehicleImage from "./VehicleImage";

import vehicleImg from "../../Assets/img/F9.png";
import styles from "../../CSS/VehicleSpecs.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";

const VehicleSpecs = () => {
    return (
        <section className={styles.vehicleSpecs}>
            <div className={styles.specs}>
                <div>
                    <VehicleName />
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                <SpecsFirstPage />
                <div className={styles.specsNav}>
                    <button className={styles.leftBtn}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <div className={styles.midBtns}>
                        <button>
                            <FontAwesomeIcon icon={faCircle} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faCircle} />
                        </button>
                    </div>
                    <button className={styles.rightBtn}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                </div>
            </div>
            <VehicleImage />
        </section>
    );
};

export default VehicleSpecs;
