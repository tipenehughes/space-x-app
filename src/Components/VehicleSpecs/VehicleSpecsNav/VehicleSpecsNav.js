import React, { useContext } from "react";
import { VehicleSpecsContext } from "../../../Context/VehicleSpecsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

import styles from "./VehicleSpecsNav.module.css";

const VehicleSpecsNav = () => {
    const { page, handleSpecPage } = useContext(VehicleSpecsContext);
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
