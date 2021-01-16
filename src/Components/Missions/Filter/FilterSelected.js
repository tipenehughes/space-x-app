import React from "react";
import styles from "./Filter.module.css";

const FilterSelected = ({ filterOptions, handleClearFilter }) => {
    // Generates selected options boxes when filter option is clicked
    return (
        <>
            {Object.values(filterOptions.selected).map((data, i) => {
                const outcome = () => {
                    if (data !== "true" && data !== "false") {
                        return data;
                    } else if (data === "true") {
                        return "SUCCESS";
                    } else {
                        return "FAILURE";
                    }
                };
                return (
                    data && (
                        <button
                            className={styles.selected}
                            onClick={() => handleClearFilter(data)}
                            key={i}
                        >
                            {outcome()}
                        </button>
                    )
                );
            })}
        </>
    );
};

export default FilterSelected;
