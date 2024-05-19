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

const BodyComponent = () => {};

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
