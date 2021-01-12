import React from "react";
import styles from "../VehicleSpecs.module.css";

const SpecsFirstPageDragon = ({
    selectionData: {        
        height_w_trunk,
        diameter,        
        dry_mass_kg,
        dry_mass_lb,        
        launch_payload_mass,
        launch_payload_vol,
        crew_capacity,
    },
}) => {
    return (
        <>
            <table className={styles.table}>
                <tbody>
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
                            {diameter.meters} m{" "}
                            <span>/ {diameter.feet} ft</span>
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
                </tbody>
            </table>
        </>
    );
};

export default SpecsFirstPageDragon;
