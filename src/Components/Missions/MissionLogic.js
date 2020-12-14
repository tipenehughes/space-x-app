import React, { useState, useEffect } from "react";
import InfoModal from "./InfoModal/InfoModal";
import Missions from "./Missions";
import MissionsError from "./MissionsError";
import Loading from "../Utilities/Loading";
import { Route, useHistory } from "react-router-dom";

const MissionLogic = () => {
    // API Data
    const [launchData, setLaunchData] = useState({});
    // Pagination for Missions
    const [pageCount, setPageCount] = useState(0);
    // Checks if API data loaded
    const [isLoading, setIsLoading] = useState(true);
    // Page counter state
    const [dataCounter, setDataCounter] = useState({
        launches: "",
        landings: "",
        reflown: "",
    });
    // Checks if there is an error (no results) based on filter selection
    const [error, setError] = useState(false);
    // Pagination for infoModal
    const [page, setPage] = useState(1);
    // Index of table row from mission data
    const [index, setIndex] = useState(0);
    // Filter display
    const [filterDisplay, setFilterDisplay] = useState(false);
    // SubFilter display
    const [subFilter, setSubFilter] = useState(false);
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

    useEffect(() => {
        getLaunchData();
        launchData.length === 0 && setError(true);
    }, [filterOptions.selected]);

    const getLaunchData = async () => {
        let vehicle = filterOptions.selected.vehicles
            .replace(/\s+/g, "")
            .toLowerCase();
        let launchSite = filterOptions.selected["Launch Site"]
            .replace(/\s+/g, "_")
            .toLowerCase();
        let launchSuccess = filterOptions.selected.outcome;
        const filter =
            "filter=flight_number,flight_name,mission_name,launch_date_unix,static_fire_date_unix,launch_site/site_name,launch_success,links(mission_patch_small,wikipedia,youtube_id,presskit,article_link),rocket(rocket_name,first_stage/cores(core_serial,reused,landing_vehicle,landing_intent,land_success),second_stage(block,payloads(payload_id,orbit_params/regime,customers))";

        const response = await fetch(
            `https://api.spacexdata.com/v3/launches?rocket_id=${vehicle}&site_id=${launchSite}&launch_success=${launchSuccess}&${filter}`
        );
        const data = await response.json();

        // Function to create 8 length arrays of data
        const perChunk = 8;
        const result = data.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / perChunk);
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []; // start a new chunk
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
        }, []);

        // Function to determine landing number
        let landingCount = 0;
        let reflownCount = 0;
        const landings = data.forEach((data) => {
            if (data.rocket.first_stage.cores[0].land_success) {
                landingCount++;
            }
            if (data.rocket.first_stage.cores[0].reused) {
                reflownCount++;
            }
            if (
                data.rocket.rocket_name === "Falcon Heavy" &&
                data.rocket.first_stage.cores[1].reused
            ) {
                reflownCount++;
            }
            if (
                data.rocket.rocket_name === "Falcon Heavy" &&
                data.rocket.first_stage.cores[1].land_success
            ) {
                landingCount++;
            }
            if (
                data.rocket.rocket_name === "Falcon Heavy" &&
                data.rocket.first_stage.cores[2].reused
            ) {
                reflownCount++;
            }
            if (
                data.rocket.rocket_name === "Falcon Heavy" &&
                data.rocket.first_stage.cores[2].land_success
            ) {
                landingCount++;
            }
        });

        setDataCounter({
            ...dataCounter,
            launches: data.length,
            landings: landingCount,
            reflown: reflownCount,
        });
        setLaunchData(result);
        setSubFilter(false);
        setFilterDisplay(false);
        setPageCount(0);
        setIsLoading(false);
    };

    // Browser back button functionality used to close info modal
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
        setPage(1);
    };

    // Event Handler for switching between Vehicle spec panel pages
    const handleInfoModalPage = () => {
        page === 2 ? setPage(1) : setPage(2);
    };

    // Stop event handler from firing on child component (infoModalInterior)
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    // Event handler to set filter display
    const handleSetFilterDisplay = (e) => {
        if (filterDisplay) {
            setFilterDisplay(false);
        } else {
            setFilterDisplay(true);
        }
        if (subFilter) {
            setSubFilter(false);
        }
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

    // Converts outcome data to string for display

    const outcome = (outcome) => {
        return outcome === false ? "FAILURE" : "SUCCESS";
    };

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

    // Sets state to determine which page of launch data to display in Missions component

    const handlePageCounterUp = () => {
        pageCount < Math.floor(dataCounter.launches / 8)
            ? setPageCount(pageCount + 1)
            : setPageCount(pageCount);
    };

    const handlePageCounterDown = () => {
        pageCount > 0 ? setPageCount(pageCount - 1) : setPageCount(0);
    };

    // Set index based on launchData array map in MissionData component

    const handleSetIndex = (i) => {
        setIndex(i);
    };

    // Determines whether to display Missions based on API data being loaded and isLoading = false

    const missionDisplay = () => {
        return isLoading ? (
            <Loading />
        ) : launchData.length === 0 ? (
            <MissionsError handleClearFilter={handleClearFilter} />
        ) : (
            <Missions
                launchData={launchData[pageCount]}
                handlePageCounterUp={handlePageCounterUp}
                handlePageCounterDown={handlePageCounterDown}
                handleSetIndex={handleSetIndex}
                handleSetFilterDisplay={handleSetFilterDisplay}
                handleSetSubFilter={handleSetSubFilter}
                handleFilterChoice={handleFilterChoice}
                handleFilterSelected={handleFilterSelected}
                handleClearFilter={handleClearFilter}
                outcome={outcome}
                unixConverter={unixConverter}
                pageCount={pageCount}
                dataCounter={dataCounter}
                filterDisplay={filterDisplay}
                subFilter={subFilter}
                filterOptions={filterOptions}
            />
        );
    };

    return (
        <>
            {missionDisplay()}
            <Route path="/missions/:mission">
                <InfoModal
                    data={launchData[pageCount]}
                    index={index}
                    unixConverter={unixConverter}
                    handleInfoModalPage={handleInfoModalPage}
                    handleGoBack={handleGoBack}
                    stopPropagation={stopPropagation}
                    page={page}
                />
            </Route>
        </>
    );
};

export default MissionLogic;
