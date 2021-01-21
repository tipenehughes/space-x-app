import React from "react";
import styles from "./MissionsNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretUp,
    faCaretDown,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

const MissionsNav = ({
  handlePageCounterUp,
  handlePageCounterDown,
  pageCount,
  pageAmount,
  handleSetPageCount,
}) => {
    const buttons = [...Array(pageAmount + 1)].map((data, i) => {
        return (
            <button key={i} onClick={() => handleSetPageCount(i)}>
                {i === pageCount ? (
                    <FontAwesomeIcon icon={faCircle} />
                ) : (
                    <FontAwesomeIcon icon={farCircle} />
                )}
            </button>
        );
    });
    return (
        <div className={styles.missionsNav}>
            <button
                className={`${styles.leftBtn} ${
                    pageCount === 0 ? styles.disabled : null
                }`}
                onClick={handlePageCounterDown}
            >
                <FontAwesomeIcon icon={faCaretUp} />
            </button>
            <div className={styles.midBtns}>{buttons}</div>
            <button
                className={`${styles.rightBtn} ${
                    pageCount === pageAmount ? styles.disabled : null
                }`}
                onClick={handlePageCounterUp}
            >
                <FontAwesomeIcon icon={faCaretDown} />
            </button>
        </div>
    );
};

export default MissionsNav;
