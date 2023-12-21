import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Account from "./Pages/Account.jsx";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/account", element: <Account /> },
  { path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
