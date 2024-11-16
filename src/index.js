import React from "react";
import ReactDOM from "react-dom/client";
import "./GlobalStyles/index.css";
import App from "./Components/App/App.jsx";
import "react-tabs/style/react-tabs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
