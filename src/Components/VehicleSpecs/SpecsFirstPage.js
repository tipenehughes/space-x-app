import React from "react";
import styles from "../../CSS/VehicleSpecs.module.css";

const SpecsFirstPage = () => {
    return (
        <table className={styles.table}>
            <tr>
                <td>HEIGHT</td>
                <td>
                    70 m <span>/ 229.6 ft</span>
                </td>
            </tr>
            <tr>
                <td>DIAMETER</td>
                <td>
                    3.7 m <span>/ 12 ft</span>
                </td>
            </tr>
            <tr>
                <td>MASS</td>
                <td>
                    549,054 kg <span>/ 1,207,920 lb</span>
                </td>
            </tr>
            <tr>
                <td>PAYLOAD TO LEO</td>
                <td>
                    22,800 kg <span>/ 50,265 lb</span>
                </td>
            </tr>
            <tr>
                <td>PAYLOAD TO GTO</td>
                <td>
                    8,300 kg <span>/ 18,300 lb</span>
                </td>
            </tr>
            <tr>
                <td>PAYLOAD TO MARS</td>
                <td>
                    4,020 kg <span>/ 8,860 lb</span>
                </td>
            </tr>
        </table>
    );
};

export default SpecsFirstPage;
