import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "pages/HomePage/HomePage.jsx";
import ItemDetailPage from "pages/ItemDetailPage/ItemDetailPage.jsx";
import LoginPage from "pages/LoginPage/LoginPage.jsx";
import UserPage from "pages/UserPage/UserPage.jsx";
import ErrorPage from "pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/item/:id",
    element: <ItemDetailPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
