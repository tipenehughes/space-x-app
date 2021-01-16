import React, { useState, createContext } from "react";
import usePersistedState from "../Custom hooks/usePersistedState";

export const MissionContext = createContext();

// This context provider is passed to any component requiring the context
export const MissionProvider = ({ children }) => {
    // API Data set from MissionLogic component
    const [launchData, setLaunchData] = usePersistedState("launchData", {});

    // Page count set from MissionLogic component
    const [pageCount, setPageCount] = usePersistedState("pageCount", 0);

    // Index of table row from mission data
    const [rowIndex, setRowIndex] = usePersistedState("infoModal", 0);

    // Page counter state set in MissionLogic and consumed in MissionStats
    const [dataCounter, setDataCounter] = useState({
        launches: "",
        landings: "",
        reflown: "",
    });

    // Pagination for infoModal
    const [page, setPage] = useState(1);

    // Event Handler for switching between info modal pages in InfoModalNav component
    const handleInfoModalPage = () => {
        page === 2 ? setPage(1) : setPage(2);
    };

    // LaunchData consumed in MissionData component and infoModalInterior
    const missionData = launchData[pageCount];

    // Converts Unix code returned from API into human readable format
    const unixConverter = (unix) => {
        const milliseconds = unix * 1000;
        const dateObject = new Date(milliseconds);
        const humanDateFormat = dateObject.toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
        return humanDateFormat;
    };

    // Converts outcome data to string for display
    const outcome = (outcome) => {
        return outcome === false ? "FAILURE" : "SUCCESS";
    };

    return (
        <MissionContext.Provider
            value={{
                launchData,
                pageCount,
                setLaunchData,
                setPageCount,
                rowIndex,
                setRowIndex,
                dataCounter,
                setDataCounter,
                page,
                setPage,
                missionData,
                outcome,
                handleInfoModalPage,
                unixConverter,
            }}
        >
            {children}
        </MissionContext.Provider>
    );
};
