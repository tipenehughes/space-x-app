import React from "react";
import styles from "./FilterOptions.module.css";

const SubFilter = ({ filterOptions, handleFilterSelected }) => {
    const choice = filterOptions.choice.toLowerCase();
    return (
        <div className={styles.subFilterContainer}>
            {filterOptions.options[choice].map((value, i) => {
                return (
                    <button
                        key={i}
                        className={styles.subFilterOption}
                        onClick={(e) => handleFilterSelected(e)}
                    >
                        {value}
                    </button>
                );
            })}
        </div>
    );
};

export default SubFilter;
