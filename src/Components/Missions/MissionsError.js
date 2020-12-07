import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../CSS/MissionsError.module.css";

const MissionsError = ({ handleClearFilter }) => {
    return (
        <div className={styles.container}>
            <div className={styles.errorBox}>
                <button
                    className={styles.closeIcon}
                    onClick={() => {
                        handleClearFilter();
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h3 className={styles.errorHeader}>Uh oh..</h3>
                <p className={styles.errorText}>
                    It looks like there's no results for this selection.
                </p>
                <p className={styles.errorText}>
                    Clear the filter to try again.
                </p>
            </div>
        </div>
    );
};

export default MissionsError;
