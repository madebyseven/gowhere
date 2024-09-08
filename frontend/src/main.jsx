import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import UserFeeds from "./pages/user/UserFeeds";
import Explore from "./pages/user/Explore";
import Trendspot from "./pages/user/Trendspot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "feeds",
        element: <UserFeeds />,
        // loader: teamLoader,
      },
      {
        path: "explore",
        element: <Explore />,
        // loader: teamLoader,
      },
      {
        path: "trendspot",
        element: <Trendspot />,
        // loader: teamLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
