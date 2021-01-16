import React, { useState, createContext } from "react";
import usePersistedState from "../Custom hooks/usePersistedState";

export const VehicleSpecsContext = createContext();

export const VehicleSpecsProvider = ({ children }) => {
    // API Data set from Landing component
    const [vehicleData, setVehicleData] = useState([]);

    // Custom hook to persist state to local storage
    const [vehicleSelection, setVehicleSelection] = usePersistedState(
        "vehicle",
        "falcon9"
    );
    // State to determine page to display on vehicle specs
    const [page, setPage] = useState(1);

    // Event Handler for switching between Vehicle spec pages
    const handleSpecPage = () => {
        page === 2 ? setPage(1) : setPage(2);
    };

    // Variants for animation
    const containerVariants = {
        hidden: {
            x: 200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "tween",
            },
        },
    };

    return (
        <VehicleSpecsContext.Provider
            value={{
                vehicleData,
                setVehicleData,
                vehicleSelection,
                setVehicleSelection,
                page,
                setPage,
                handleSpecPage,
                containerVariants,
            }}
        >
            {children}
        </VehicleSpecsContext.Provider>
    );
};
