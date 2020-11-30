import React from "react";
import styles from "../../../CSS/Filter.module.css";

const SubFilter = ({ filterOptions }) => {
    const choice = filterOptions.choice.toLowerCase();
    return (
        <div className={styles.subFilterContainer}>
            {filterOptions.options[choice].map((value) => {
                return (
                    <button className={styles.subFilterOption}>{value}</button>
                );
            })}
            {/* <button className={styles.subFilterOption}>FALCON 1</button>
            <button className={styles.subFilterOption}>FALCON 9</button>
            <button className={styles.subFilterOption}>FALCON HEAVY</button> */}
            {/* <button className={styles.subFilterOption}></button> */}
            {/* <button className={styles.subFilterOption}></button> */}
        </div>
    );
};

export default SubFilter;
