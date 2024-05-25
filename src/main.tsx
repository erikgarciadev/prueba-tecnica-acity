import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes";
import { HashRouter } from "react-router-dom";
import GlobalProvider from "./context/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </HashRouter>
  </React.StrictMode>
);
