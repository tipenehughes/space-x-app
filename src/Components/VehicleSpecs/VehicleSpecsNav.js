import React from "react";

import styles from "../../CSS/VehicleSpecs.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

const VehicleSpecsNav = ({ page, handleSpecPage }) => {
    return (
        <div className={styles.specsNav}>
            <button className={styles.leftBtn} onClick={handleSpecPage}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <div className={styles.midBtns}>
                <button onClick={handleSpecPage}>
                    {page === 1 ? (
                        <FontAwesomeIcon icon={faCircle} />
                    ) : (
                        <FontAwesomeIcon icon={farCircle} />
                    )}
                </button>
                <button onClick={handleSpecPage}>
                    {page === 2 ? (
                        <FontAwesomeIcon icon={faCircle} />
                    ) : (
                        <FontAwesomeIcon icon={farCircle} />
                    )}
                </button>
            </div>
            <button className={styles.rightBtn} onClick={handleSpecPage}>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
        </div>
    );
};

export default VehicleSpecsNav;
