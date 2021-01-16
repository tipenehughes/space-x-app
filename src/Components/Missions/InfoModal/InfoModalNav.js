import React, { useContext } from "react";
import { MissionContext } from "../../../Context/MissionsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import styles from "./InfoModal.module.css";

const InfoModalNav = () => {
    const { page, handleInfoModalPage } = useContext(MissionContext);
    return (
        <div className={styles.infoNav}>
            <button className={styles.leftBtn} onClick={handleInfoModalPage}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <div className={styles.midBtns}>
                <button onClick={handleInfoModalPage}>
                    {page === 1 ? (
                        <FontAwesomeIcon icon={faCircle} />
                    ) : (
                        <FontAwesomeIcon icon={farCircle} />
                    )}
                </button>
                <button onClick={handleInfoModalPage}>
                    {page === 2 ? (
                        <FontAwesomeIcon icon={faCircle} />
                    ) : (
                        <FontAwesomeIcon icon={farCircle} />
                    )}
                </button>
            </div>
            <button className={styles.rightBtn} onClick={handleInfoModalPage}>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
        </div>
    );
};

export default InfoModalNav;
