import React from "react";
import { MapProvider } from "react-map-gl";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Context } from "./utils/Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <MapProvider>
        <Context>
          <App />
        </Context>
      </MapProvider>
  </React.StrictMode>
);
