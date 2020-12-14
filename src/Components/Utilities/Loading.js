import React from "react";
import styles from "../../CSS/Loading.module.css";
import LoadingImg from "../../Assets/img/loading.svg";

const Loading = () => {
    return (
        <div className={styles.container}>
            <img className={styles.loadingImg} src={LoadingImg} alt="" />
        </div>
    );
};

export default Loading;
