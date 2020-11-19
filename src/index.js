import React from "react";
import ReactDOM from "react-dom";


import App from "./App";

ReactDOM.render(
    // <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    // </BrowserRouter>,
    document.getElementById("root")
);
