import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import Home from "./pages/home.js";
import Htmlcourse from "./pages/htmlCourse.js";
import Csscourse from "./pages/cssCourse.js";
import Javascriptcourse from "./pages/javascriptCourse.js";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ color: "red" }}>Oops!</h1>,
  },

  {
    path: "/htmlCourse",
    element: <Htmlcourse />,
    errorElement: <h1 style={{ color: "red" }}>Oops!</h1>,
  },

  {
    path: "/cssCourse",
    element: <Csscourse />,
    errorElement: <h1 style={{ color: "red" }}>Oops!</h1>,
  },

  {
    path: "/javascriptCourse",
    element: <Javascriptcourse />,
    errorElement: <h1 style={{ color: "red" }}>Oops!</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();