import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import Home from "./Home";

const HomeLogic = () => {
    const [open, setOpen] = useState(false);
    const getOpen = () => {
        return open === false ? setOpen(true) : setOpen(false);
    };
    const fetchLaunch = async () => {
        const response = await fetch(
            "https://api.spacexdata.com/v4/launches/next"
        );
        return response.json();
    };

    const { data, status } = useQuery("launch", fetchLaunch);

    console.log(data);

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
            <Home
                containerVariants={headerVariants}
                descriptionVariants={descriptionVariants}
                getOpen={getOpen}
                open={open}
            />
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    );
};

export default HomeLogic;
