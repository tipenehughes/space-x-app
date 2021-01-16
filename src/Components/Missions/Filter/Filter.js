import React, { useContext } from "react";
import { MissionContext } from "../../../Context/MissionsContext";
import FilterOptions from "./FilterOptions";
import FilterSelected from "./FilterSelected";
import SubFilter from "./SubFilter";
import { motion } from "framer-motion";
import styles from "./Filter.module.css";

const Filter = () => {
    const {
        filterDisplay,
        subFilter,
        filterOptions,
        handleSetFilterDisplay,
        handleSetSubFilter,
        handleFilterChoice,
        handleFilterSelected,
        handleClearFilter,
    } = useContext(MissionContext);
    const filterVariants = {
        hidden: {
            scaleY: 0,
        },
        visible: {
            scaleY: 1,
            transition: {
                duration: 0.2,
                type: "tween",
            },
        },
    };
    const subFilterVariants = {
        hidden: {
            scaleY: 0,
        },
        visible: {
            scaleY: 1,
            transition: {
                duration: 0.2,
                type: "tween",
            },
        },
    };
  
    return (
        <div className={styles.filter}>
            <div className={styles.filterSelected}>
                <button
                    className={styles.filterBtn}
                    onClick={() => handleSetFilterDisplay()}
                    style={{
                        backgroundColor: filterDisplay && "var(--space-x-blue)",
                    }}
                >
                    FILTER
                </button>
                <FilterSelected
                    filterOptions={filterOptions}
                    handleClearFilter={handleClearFilter}
                />
            </div>
            {filterDisplay && (
                <motion.div
                    variants={filterVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <FilterOptions
                        handleSetSubFilter={handleSetSubFilter}
                        handleFilterChoice={handleFilterChoice}
                        filterOptions={filterOptions}
                        handleClearFilter={handleClearFilter}
                        subFilter={subFilter}
                    />
                </motion.div>
            )}
            {subFilter && (
                <motion.div
                    variants={subFilterVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <SubFilter
                        filterOptions={filterOptions}
                        handleFilterSelected={handleFilterSelected}
                    />
                </motion.div>
            )}
        </div>
    );
};

export default Filter;
