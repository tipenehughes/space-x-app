import React, { useContext } from "react";
import { MissionContext } from "../../../Context/MissionsContext";
import { useHistory } from "react-router-dom";

import styles from "./MissionTable.module.css";

const MissionTable = () => {
    const { missionData, unixConverter, setRowIndex, outcome } = useContext(
        MissionContext
    );

    const history = useHistory();
    const handleRowClick = (i) => {
        history.push(`/missions/${missionData[i].mission_name}`);
    };

    const handleClick = (i) => {
        setRowIndex(i);
        handleRowClick(i);
    };

    return (
        <table className={styles.missionTable}>
            <tbody>
                <tr>
                    <td>FLIGHT NO</td>
                    <td>VEHICLE</td>
                    <td>DATE</td>
                    <td>LAUNCH SITE</td>
                    <td>PAYLOAD</td>
                    <td>CUSTOMER</td>
                    <td>OUTCOME</td>
                </tr>
                {missionData.map((data, index) => (
                    <tr onClick={() => handleClick(index)} key={index}>
                        <td>{data.flight_number}</td>
                        <td>{data.rocket.rocket_name}</td>
                        <td>{unixConverter(data.launch_date_unix)}</td>
                        <td>{data.launch_site.site_name}</td>
                        <td>
                            {data.rocket.second_stage.payloads[0].payload_id}
                        </td>
                        <td>
                            {data.rocket.second_stage.payloads[0].customers[0]}
                        </td>
                        <td>{outcome(data.launch_success)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MissionTable;
