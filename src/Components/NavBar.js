import React from "react";

import logo from "../Assets/img/logo.svg";
import styles from "../CSS/NavBar.module.css";

const NavBar = ({ handleVehicleSelection }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src={logo} alt="SpaceX logo" />
                </div>
                <div className={styles.navLinks}>
                    <a href="#" onClick={handleVehicleSelection}>
                        <h2>FALCON 9</h2>
                    </a>
                </div>
                <div className={styles.navLinks}>
                    <a href="#" onClick={handleVehicleSelection}>
                        <h2>FALCON HEAVY</h2>
                    </a>
                </div>
                <div className={styles.navLinks}>
                    <a href="#" onClick={handleVehicleSelection}>
                        <h2>DRAGON</h2>
                    </a>
                </div>
                <div className={styles.navLinks}>
                    <a href="#" onClick={handleVehicleSelection}>
                        <h2>STARSHIP</h2>
                    </a>
                </div>
                <div className={styles.missionBtn}>
                    <button>MISSIONS</button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
