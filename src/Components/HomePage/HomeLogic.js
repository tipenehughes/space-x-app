import React, { useState } from "react";
import { useQuery } from "react-query";
import Home from "./Home";

const HomeLogic = () => {
    const [open, setOpen] = useState(false);

    // const postData = async (url = "", data = {}) => {
    //     const response = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //     })
    //     const res = await response.json()
    //     console.log(res);
    //     return res;
    // };

    // postData("https://api.spacexdata.com/v4/launches/next", {
    //     query: {},
    //     options: {
    //         populate: [
    //             // {
    //             //     path: "ships",
    //             //     select: {},
    //             // },
    //             // "ships",
    //             // "payloads",
    //             "rocket",
    //             "launchpad",
    //         ],
    //     },
    // }).then((data) => {
    //     console.log(data); // JSON data parsed by `data.json()` call
    // });

    // postData();

    const fetchLaunch = async () => {
        const response = await fetch(
            "https://api.spacexdata.com/v4/launches/next"
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
