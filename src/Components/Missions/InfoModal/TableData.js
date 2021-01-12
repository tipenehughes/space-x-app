import React from "react";
import styles from "./InfoModal.module.css";

const TableData = ({ data, unixConverter }) => {
    return (
        <table className={styles.table}>
            <tbody>
                <tr>
                    <td>CORE</td>
                    <td>{`BLOCK ${data.rocket.second_stage.block}`}</td>
                </tr>
                <tr>
                    <td>CORE SERIAL</td>
                    <td>{data.rocket.first_stage.cores[0].core_serial}</td>
                </tr>
                <tr>
                    <td>REUSED</td>
                    <td>
                        {data.rocket.first_stage.cores[0].reused.toString()}
                    </td>
                </tr>
                <tr>
                    <td>STATIC FIRE</td>
                    <td>{unixConverter(data.static_fire_date_unix)}</td>
                </tr>
                <tr>
                    <td>PAYLOAD ORBIT</td>
                    <td>
                        {
                            data.rocket.second_stage.payloads[0].orbit_params
                                .regime
                        }
                    </td>
                </tr>
                <tr>
                    <td>LANDING SITE</td>
                    <td>
                        {!data.rocket.first_stage.cores[0].landing_vehicle
                            ? "N/A"
                            : data.rocket.first_stage.cores[0].landing_vehicle}
                    </td>
                </tr>
                <tr>
                    <td>LANDING SUCCESS</td>
                    <td>
                        {!data.rocket.first_stage.cores[0].landing_intent
                            ? "N/A"
                            : data.rocket.first_stage.cores[0].land_success ===
                              null
                            ? "FALSE"
                            : data.rocket.first_stage.cores[0].land_success.toString()}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableData;
