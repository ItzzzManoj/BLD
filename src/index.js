import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppComponent from "./components/AppComponent";
import AboutComponent from "./components/navigation-menu/AboutComponent";
import CartComponent from "./components/navigation-menu/CartComponent";
import AccountDetailsComponent from "./components/navigation-menu/AccountDetailsComponent";
import LocationComponent from "./components/navigation-menu/LocationComponent";
import BodyComponent from "./components/BodyComponent";
import RestaurantDetailsComponent from "./components/RestaurantDetailsComponent";
import ErrorComponent from "./components/error-state/ErrorComponent";

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
        element: <AboutComponent location="Coimbatore"/>
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
