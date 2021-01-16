import React, { useState, useEffect, useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import { MissionContext } from "../../Context/MissionsContext";

import InfoModal from "./InfoModal/InfoModal";
import Missions from "./Missions";
import MissionsError from "./MissionsError/MissionsError";
import Loading from "../Utilities/Loading";

const MissionLogic = () => {
    const {
        pageCount,
        setPageCount,
        launchData,
        setLaunchData,
        setPage,
        dataCounter,
        setDataCounter,
        setFilterDisplay,
        setSubFilter,
        filterOptions,
        isLoading,
        setIsLoading,
    } = useContext(MissionContext);
    // Example POST method implementation:
    // const postData = async (url = "", data = {}) => {
    //     const response = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });

    //     return response.json();
    // };

    // postData("https://api.spacexdata.com/v4/launches/query", {
    //     query: { },
    //     options: {
    //         limit: 8,
    //         populate: [
    //             {
    //                 path: "cores",
    //                 populate: [{ path: "core" }],
    //             },
    //             "payloads",
    //             "rocket",
    //             "launchpad",
    //         ],
    //     },
    // }).then((data) => {
    //     console.log(data); // JSON data parsed by `data.json()` call
    // });

    // Calcualtes number of results pages based API result length / 8
    const [pageAmount, setPageAmount] = useState();

    useEffect(() => {
        getLaunchData();
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

        // Function to determine stats for display
        let landingCount = 0;
        let reflownCount = 0;
        const landings = data.forEach((data) => {
            data.rocket.first_stage.cores[0].land_success && landingCount++;
            data.rocket.first_stage.cores[0].reused && reflownCount++;
            if (data.rocket.rocket_name === "Falcon Heavy") {
                data.rocket.first_stage.cores[1].reused && reflownCount++;
                data.rocket.first_stage.cores[1].land_success && landingCount++;
                data.rocket.first_stage.cores[2].reused && reflownCount++;
                data.rocket.first_stage.cores[2].land_success && landingCount++;
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
        // Set page count to zero if pageAmount is less than than page count
        pageCount > Math.floor(data.length / 8) && setPageCount(0);
        setPageAmount(Math.floor(data.length / 8));
        setIsLoading(false);
    };

    // Browser back button functionality used to close info modal
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
        setPage(1);
    };

    // Sets state to determine which page of launch data to display in Missions component
    const handlePageCounterUp = () => {
        pageCount < pageAmount
            ? setPageCount(pageCount + 1)
            : setPageCount(pageCount);
    };
    const handlePageCounterDown = () => {
        pageCount > 0 ? setPageCount(pageCount - 1) : setPageCount(0);
    };
    // Determines which page to display based on bottom nav buttons clicked in missions component.
    const handleSetPageCount = (num) => {
        setPageCount(num);
    };

    return isLoading ? (
        <Loading />
    ) : launchData.length === 0 ? (
        <MissionsError />
    ) : (
        <>
            <Missions
                handlePageCounterUp={handlePageCounterUp}
                handlePageCounterDown={handlePageCounterDown}
                pageCount={pageCount}
                pageAmount={pageAmount}
                handleSetPageCount={handleSetPageCount}
            />
            <Route path="/missions/:mission">
                <InfoModal handleGoBack={handleGoBack} />
            </Route>
        </>
    );
};

export default MissionLogic;
