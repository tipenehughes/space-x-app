import React, { useState, useEffect } from "react";
import styles from "../../CSS/VehicleSpecs.module.css";

const SpecsFirstPage = ({
    selectionData: {
        height,
        height_w_trunk,
        diameter,
        mass,
        dry_mass_kg,
        dry_mass_lb,
        payload_weights,
        launch_payload_mass,
        launch_payload_vol,
        crew_capacity,
    },
    vehicleSelection,
}) => {
    return vehicleSelection === "DRAGON" ? (
        <table className={styles.table}>
            <tr>
                <td>HEIGHT</td>
                <td>
                    {height_w_trunk.meters} m{" "}
                    <span>/ {height_w_trunk.feet} ft</span>
                </td>
            </tr>
            <tr>
                <td>DIAMETER</td>
                <td>
                    {diameter.meters} m <span>/ {diameter.feet} ft</span>
                </td>
            </tr>
            <tr>
                <td>MASS</td>
                <td>
                    {dry_mass_kg} kg <span>/ {dry_mass_lb} lb</span>
                </td>
            </tr>
            <tr>
                <td>LAUNCH PAYLOAD MASS</td>
                <td>
                    {launch_payload_mass.kg} kg{" "}
                    <span>/ {launch_payload_mass.lb} lb</span>
                </td>
            </tr>
            <tr>
                <td>LAUNCH PAYLOAD VOLUME</td>
                <td>
                    {launch_payload_vol.cubic_meters} m3{" "}
                    <span>/ {launch_payload_vol.cubic_feet} ft3</span>
                </td>
            </tr>
            <tr>
                <td>CREW CAPACITY</td>
                <td>{crew_capacity}</td>
            </tr>
        </table>
    ) : (
        <table className={styles.table}>
            <tr>
                <td>HEIGHT</td>
                <td>
                    {height.meters} m <span>/ {height.feet} ft</span>
                </td>
            </tr>
            <tr>
                <td>DIAMETER</td>
                <td>
                    {diameter.meters} m <span>/ {diameter.feet} ft</span>
                </td>
            </tr>
            <tr>
                <td>MASS</td>
                <td>
                    {mass.kg} kg <span>/ {mass.lb} lb</span>
                </td>
            </tr>
            <tr>
                <td>PAYLOAD TO LEO</td>
                <td>
                    {payload_weights[0].kg} kg{" "}
                    <span>/ {payload_weights[0].lb} lb</span>
                </td>
            </tr>
            <tr>
                <td>PAYLOAD TO GTO</td>
                <td>
                    {payload_weights[1].kg} kg{" "}
                    <span>/ {payload_weights[1].lb} lb</span>
                </td>
            </tr>
            <tr>
                <td>PAYLOAD TO MARS</td>
                <td>
                    {payload_weights[2].kg} kg{" "}
                    <span>/ {payload_weights[2].lb} lb</span>
                </td>
            </tr>
        </table>
    );
};

export default SpecsFirstPage;
