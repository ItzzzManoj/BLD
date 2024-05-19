import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="" className="logo" />
        <span className="logo-name">
          BLD
        </span>
      </div>
      <ul>
        <li>
          About Us
        </li>
        <li>
          Cart
        </li>
        <li>
          Available Locations
        </li>
        <li>
          Account Details
        </li>
      </ul>
    </header>
  );
};

const IndividualRestaurantComponent = () => {
  return (
    <div className="individual-card">
      <div className="image-container">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"/>
      </div>
      <h1>
        Pizza Hut
      </h1>
      <h2>
        Rating: 4.5
      </h2>
      <h3>
        Arabian, Burger, Asian
      </h3>
      <h4>
        Ramanathapuram, Coimbatore
      </h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input type="search" placeholder="Search..." />
      </div>
      <div className="card-container">
        <IndividualRestaurantComponent />
        <IndividualRestaurantComponent />
        <IndividualRestaurantComponent />
        <IndividualRestaurantComponent />
        <IndividualRestaurantComponent />
        <IndividualRestaurantComponent />
        <IndividualRestaurantComponent />
        <IndividualRestaurantComponent />
      </div>
    </div>
  );
};

const FooterComponent = () => {};

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
