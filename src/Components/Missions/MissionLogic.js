import React, { useState, useEffect } from "react";
import Missions from "./Missions";

const MissionLogic = () => {
    const [launchData, setLaunchData] = useState({});
    const [pageCount, setPageCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState("");

    console.log(launchData);

    useEffect(() => {
        getLaunchData();
    }, [pageCount]);

    const getLaunchData = async () => {
        const response = await fetch(`https://api.spacexdata.com/v3/launches`);
        const data = await response.json();
        let perChunk = 8; // items per chunk
        let result = data.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / perChunk);
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []; // start a new chunk
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
        }, []);
        setLaunchData(result[pageCount]);
        setIsLoading(false);
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
        pageCount < 13 ? setPageCount(pageCount + 1) : setPageCount(pageCount);
    };

    const handlePageCounterDown = () => {
        pageCount > 0 ? setPageCount(pageCount - 1) : setPageCount(0);
    };
    console.log(pageCount);
    // Determines whether to display Missions based on API data being loaded and isLoading = false

    const missionDisplay = () => {
        return isLoading ? null : (
            <Missions
                launchData={launchData}
                handlePageCounterUp={handlePageCounterUp}
                handlePageCounterDown={handlePageCounterDown}
                outcome={outcome}
                unixConverter={unixConverter}
            />
        );
    };

    return <>{missionDisplay()}</>;
};

export default MissionLogic;
