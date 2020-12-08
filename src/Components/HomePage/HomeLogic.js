import React from "react";
import Home from "./Home";

const HomeLogic = () => {
    const containerVariants = {
        hidden: {
            y: 100,
            x: 0,
            opacity: 0,
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "ease",
            },
        },
    };

    return <Home containerVariants={containerVariants} />;
};

export default HomeLogic;
