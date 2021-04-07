import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
    applicationId: "bed7a06a-afda-49e9-a318-84d463036a01",
    clientToken: "pub32c0a33e33ec69425c509796556e2646",
    site: "datadoghq.com",
    service: "space-x-app",
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
