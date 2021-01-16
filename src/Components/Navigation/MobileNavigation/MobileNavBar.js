import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavVehicles from "./MobileNavVehicles";

import styles from "./MobileNavBar.module.css";

const MobileNavBar = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        return menu === false ? setMenu(true) : setMenu(false);
    };

    const navVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "tween",
            },
        },
    };

    return (
        <>
            {menu && (
                <MobileNavVehicles                    
                    navVariants={navVariants}
                />
            )}
            <nav className={styles.mobileNavContainer}>
                <div className={styles.mobileNav}>
                    <Link to="/" onClick={() => setMenu(false)}>
                        <h4>HOME</h4>
                    </Link>
                    <div onClick={handleMenu}>
                        <h4>VEHICLES</h4>
                    </div>
                    <Link to="/missions" onClick={() => setMenu(false)}>
                        <h4>MISSIONS</h4>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default MobileNavBar;
