import React from "react";
import Manager from "./pages/Manager";

import { render } from "@wordpress/element";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";

render(
  <React.StrictMode>
    <Manager />
  </React.StrictMode>,
  document.getElementById("cfs-exporter-entry")
);
