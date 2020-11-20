import React from "react";
import { Link, useParams, withRouter } from "react-router-dom";

import logo from "../Assets/img/logo.svg";
import styles from "../CSS/NavBar.module.css";

const NavBar = ({ handleVehicleSelection }) => {
    
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="SpaceX logo" />
                    </Link>
                </div>
                <div
                    className={styles.navLinks}
                    onClick={handleVehicleSelection}
                >
                    <Link to="/vehicles/falcon9">
                        <h2>FALCON 9</h2>
                    </Link>
                </div>
                <div
                    className={styles.navLinks}
                    onClick={handleVehicleSelection}
                >
                    <Link to="/vehicles/falconheavy">
                        <h2>FALCON HEAVY</h2>
                    </Link>
                </div>
                <div
                    className={styles.navLinks}
                    onClick={handleVehicleSelection}
                >
                    <Link to="/vehicles/dragon">
                        <h2>DRAGON</h2>
                    </Link>
                </div>
                <div
                    className={styles.navLinks}
                    onClick={handleVehicleSelection}
                >
                    <Link to="/vehicles/starship">
                        <h2>STARSHIP</h2>
                    </Link>
                </div>
                <div className={styles.missionBtn}>
                    <button>MISSIONS</button>
                </div>
            </nav>
        </header>
    );
};

export default withRouter(NavBar);
