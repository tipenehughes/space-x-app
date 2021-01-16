import React, { useState, createContext } from "react";
import usePersistedState from "../Custom hooks/usePersistedState";

export const MissionContext = createContext();

// This context provider is passed to any component requiring the context
export const MissionProvider = ({ children }) => {
    // API Data set from MissionLogic component
    const [launchData, setLaunchData] = usePersistedState("launchData", {});

    // Checks if API data loaded
    const [isLoading, setIsLoading] = useState(true);

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
    // Filter display
    const [filterDisplay, setFilterDisplay] = useState(false);
    // SubFilter display
    const [subFilter, setSubFilter] = useState(false);
    // Pagination for infoModal
    const [page, setPage] = useState(1);
    // Filter options
    const [filterOptions, setFilterOptions] = useState({
        choice: "",
        options: {
            vehicle: ["FALCON 1", "FALCON 9", "FALCON HEAVY"],
            "launch site": [
                "KWAJALEIN ATOLL",
                "CCAFS SLC 40",
                "VAFB SLC 4E",
                "KSC LC 39A",
            ],
            outcome: ["SUCCESS", "FAILURE"],
        },
        selected: {
            vehicles: "",
            "Launch Site": "",
            outcome: "",
        },
        filterClear: true,
    });
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

    // Event handler to set filter display
    const handleSetFilterDisplay = () => {
        if (subFilter) {
            setSubFilter(false);
        }
        return filterDisplay ? setFilterDisplay(false) : setFilterDisplay(true);
    };

    // Event handler to set sub filter display
    const handleSetSubFilter = (e) => {
        subFilter && e.target.tagName !== "BUTTON"
            ? setSubFilter(false)
            : setSubFilter(true);
    };

    // Event handler to update choice based on first filter option selected
    const handleFilterChoice = (e) => {
        let choice = e.target.innerText;
        setFilterOptions({
            ...filterOptions,
            choice: choice,
        });
    };

    // Event handler to set state based on filter selections
    const handleFilterSelected = (e) => {
        let option = e.target.innerText;
        if (filterOptions.choice === "VEHICLE") {
            setFilterOptions({
                ...filterOptions,
                filterClear: false,
                selected: {
                    ...filterOptions.selected,
                    vehicles: option,
                },
            });
            setIsLoading(true);
        } else if (filterOptions.choice === "LAUNCH SITE") {
            setFilterOptions({
                ...filterOptions,
                filterClear: false,
                selected: {
                    ...filterOptions.selected,
                    "Launch Site": option,
                },
            });
            setIsLoading(true);
        } else if (filterOptions.choice === "OUTCOME") {
            option === "SUCCESS" ? (option = "true") : (option = "false");
            setFilterOptions({
                ...filterOptions,
                filterClear: false,
                selected: {
                    ...filterOptions.selected,
                    outcome: option,
                },
            });
            setIsLoading(true);
        }
    };

    // Event handler to clear sub filter
    const handleClearFilter = (selected) => {
        if (selected === filterOptions.selected.vehicles) {
            setFilterOptions({
                ...filterOptions,
                filterClear: true,
                selected: {
                    ...filterOptions.selected,
                    vehicles: "",
                },
            });
        } else if (selected === filterOptions.selected["Launch Site"]) {
            setFilterOptions({
                ...filterOptions,
                filterClear: true,
                selected: {
                    ...filterOptions.selected,
                    "Launch Site": "",
                },
            });
        } else if (selected === filterOptions.selected.outcome) {
            setFilterOptions({
                ...filterOptions,
                filterClear: true,
                selected: {
                    ...filterOptions.selected,
                    outcome: "",
                },
            });
        } else {
            setFilterOptions({
                ...filterOptions,
                filterClear: true,
                selected: {
                    ...filterOptions.selected,
                    vehicles: "",
                    "Launch Site": "",
                    outcome: "",
                },
            });
        }
        setIsLoading(true);
        setFilterDisplay(false);
        setSubFilter(false);
    };

    return (
        <MissionContext.Provider
            value={{
                launchData,
                pageCount,
                setLaunchData,
                setPageCount,
                isLoading,
                setIsLoading,
                rowIndex,
                setRowIndex,
                dataCounter,
                setDataCounter,
                page,
                setPage,
                filterDisplay,
                setFilterDisplay,
                subFilter,
                setSubFilter,
                filterOptions,
                setFilterOptions,
                missionData,
                outcome,
                handleInfoModalPage,
                handleSetFilterDisplay,
                handleSetSubFilter,
                handleFilterChoice,
                handleClearFilter,
                handleFilterSelected,
                unixConverter,

            }}
        >
            {children}
        </MissionContext.Provider>
    );
};
