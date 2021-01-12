import React from "react";

import styles from "../VehicleSpecs.module.css";

const SpecsFirstPage = ({
    selectionData: { height, diameter, mass, payload_weights },
}) => {
    return (
        <>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>HEIGHT</td>
                        <td>
                            {height.meters} m <span>/ {height.feet} ft</span>
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
                </tbody>
            </table>
        </>
    );
};

export default SpecsFirstPage;
