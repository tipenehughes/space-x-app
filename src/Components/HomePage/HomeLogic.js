import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Home from "./Home";

const HomeLogic = () => {
    const [open, setOpen] = useState(false);

    // Testing for launch data

    // const getLaunchData = async () => {
    //     const settings = {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             query: {
    //                 success: true,

    //             },
    //             options: {
    //                 populate: ["rocket", "launchpad"],
    //             },
    //         }),
    //     };
    //     const response = await fetch(
    //         `https://api.spacexdata.com/v4/launches/query`,
    //         settings
    //     );
    //     const data = await response.json();
    //     console.log(data);
    // };

    // getLaunchData();

    const fetchLaunch = async () => {
        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: {
                    upcoming: true,
                },
                options: {
                    limit: 1,
                    sort: {
                        flight_number: "asc",
                    },
                    populate: ["payloads", "launchpad", "rocket"],
                },
            }),
        };
        const response = await fetch(
            "https://api.spacexdata.com/v4/launches/query",
            settings
        );
        return response.json();
    };
    const { data, status } = useQuery("launch", fetchLaunch);

    // Event handler for setting state to open or closed for HomeDescription component
    const getOpen = () => {
        return open === false ? setOpen(true) : setOpen(false);
    };

    // Animation containerVariants

    let headerVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "ease",
            },
        },
        open: {
            y: -100,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "ease",
            },
        },
    };

    let descriptionVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.2,
                type: "ease",
            },
        },
    };
    return (
        <>
            {status === "success" && (
                <Home
                    containerVariants={headerVariants}
                    descriptionVariants={descriptionVariants}
                    getOpen={getOpen}
                    open={open}
                    data={data}
                />
            )}
        </>
    );
};

export default HomeLogic;
