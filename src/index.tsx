import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// Set a cross-site cookie for third-party contexts
document.cookie = "cookie2=value2; SameSite=None; Secure";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
