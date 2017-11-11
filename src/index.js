import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import OldRouter from "./new_router";
import { Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<OldRouter />, document.getElementById("root"));
// registerServiceWorker();
