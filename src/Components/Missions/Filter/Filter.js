import React from "react";

import styles from "../../../CSS/Filter.module.css";

const Filter = ({ handleSetSubFilter, handleFilterChoice, filterOptions }) => {
    console.log(Object.keys(filterOptions.options));
    return (
        <div className={styles.filterContainer}>
            {Object.keys(filterOptions.options).map((value) => {
                return (
                    <button
                        className={styles.filterOption}
                        onClick={(e) => {
                            handleSetSubFilter();
                            handleFilterChoice(e);
                        }}
                    >
                        {value.toUpperCase()}
                    </button>
                );
            })}
            <button className={styles.filterOption}>CLEAR FILTER</button>
        </div>
    );
};

export default Filter;
