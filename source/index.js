import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./components/AppComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import CartComponent from "./components/CartComponent";
import AccountDetailsComponent from "./components/AccountDetailsComponent";
import LocationComponent from "./components/LocationComponent";
import BodyComponent from "./components/BodyComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantDetailsComponent from "./components/RestaurantDetailsComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <ErrorComponent />,
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
      },
      {
        path: "/restaurant-details/:resId",
        element: <RestaurantDetailsComponent />
      }
    ]
  }
]);

root.render(<RouterProvider router={AppRouter} />);
