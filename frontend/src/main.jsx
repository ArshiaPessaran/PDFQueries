import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import GasPrices from "./Pages/GasPrices.jsx";
import CurrencyConverter from "./Pages/CurrencyConverter.jsx";
import AITravelAgent from "./Pages/AITravelAgent.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/gas-prices", element: <GasPrices /> },
  { path: "/currency-converter", element: <CurrencyConverter /> },
  { path: "/travel-agent", element: <AITravelAgent /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
