import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./components/AppComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import CartComponent from "./components/CartComponent";
import AccountDetailsComponent from "./components/AccountDetailsComponent";
import LocationComponent from "./components/LocationComponent";
import BodyComponent from "./components/BodyComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />
      },
      {
        path: "/about",
        element: <AboutComponent />
      }, 
      {
        path: "/cart",
        element: <CartComponent />
      },
      {
        path: "/available-locations",
        element: <LocationComponent />
      },
      {
        path: "/account-details",
        element: <AccountDetailsComponent />
      }
    ]
  }
]);

root.render(<RouterProvider router={AppRouter} />);
