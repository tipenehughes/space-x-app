import React from "react";
import styles from "../../CSS/VehicleSpecs.module.css";

const SpecsSecondPage = () => {
    return (
        <>
            <table className={styles.table}>
                <tr>
                    <td>FIRST LAUNCH</td>
                    <td>4 JUNE 2010</td>
                </tr>
                <tr>
                    <td>TOTAL LAUNCHES</td>
                    <td>98</td>
                </tr>
                <tr>
                    <td>ENGINES</td>
                    <td>
                        9 <span>/ MERLIN</span>
                    </td>
                </tr>
                <tr>
                    <td>COST PER LAUNCH</td>
                    <td>
                        $50 m REUSED <span>/ $60 m NEW</span>
                    </td>
                </tr>
            </table>
            <div class={styles.videoBtns}>
                <button>FIRST FLIGHT</button>
                <button>FIRST LANDING</button>
                <button>LATEST MISSION</button>
            </div>
        </>
    );
};

export default SpecsSecondPage;
