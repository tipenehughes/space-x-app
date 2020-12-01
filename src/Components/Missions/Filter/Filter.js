import React from "react";

import styles from "../../../CSS/Filter.module.css";

const Filter = ({
    handleSetSubFilter,
    handleFilterChoice,
    handleClearFilter,
    filterOptions,
}) => {
    console.log(Object.keys(filterOptions.options));
    return (
        <div className={styles.filterContainer}>
            {Object.keys(filterOptions.options).map((value, i) => {
                return (
                    <button
                        key={i}
                        className={styles.filterOption}
                        onClick={(e) => {
                            handleSetSubFilter(e);
                            handleFilterChoice(e);
                        }}
                    >
                        {value.toUpperCase()}
                    </button>
                );
            })}
            <button className={styles.filterOption} onClick={handleClearFilter}>
                CLEAR FILTER
            </button>
        </div>
    );
};

export default Filter;
