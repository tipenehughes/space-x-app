import React from "react";

import LoadingImg from "../../Assets/img/loading.svg";
import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.container}>
            <img className={styles.loadingImg} src={LoadingImg} alt="" />
        </div>
    );
};

export default Loading;
