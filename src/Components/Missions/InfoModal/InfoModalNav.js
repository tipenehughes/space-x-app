import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretLeft,
    faCaretRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
import styles from "../../../CSS/InfoModal.module.css";

const InfoModalNav = ({ handleInfoModalPage }) => {
    return (
        <div className={styles.infoNav}>
            <button className={styles.leftBtn} onClick={handleInfoModalPage}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <div className={styles.midBtns}>
                <button>
                    <FontAwesomeIcon icon={faCircle} />
                </button>
                <button>
                    <FontAwesomeIcon icon={farCircle} />
                </button>
            </div>
            <button className={styles.rightBtn} onClick={handleInfoModalPage}>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
        </div>
    );
};

export default InfoModalNav;
