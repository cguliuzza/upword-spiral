import "./index.css";
import React from "react";
import App from "./containers/App";
import { ReactDOM } from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import AppStateProvider from "./src/context/AppStateProvider";

ReactDOM.render (
    // <React.StrictMode>
        /* <BrowserRouter> */
            <AppStateProvider>
                <App />
            </AppStateProvider>
        /* </BrowserRouter> */
    // </React.StrictMode>,
    document.getElementById("root")
);