import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from "react-router-dom";

const HeaderComponent = () => {

  let [ logInText, setLogInText ] = useState('Login');

  return (
    <header className="header">
      <Link to="/">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt=""
            className="logo"
          />
          <span className="logo-name">BLD</span>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/about">
            About Us
            </Link>
        </li>
        <li>
          <Link to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/available-locations">
            Available Locations
          </Link>
        </li>
        <li>
          <Link to="/account-details">
            Account Details
          </Link>
        </li>
        <button 
          type="button"
          onClick={() => {
            logInText = logInText === 'Login' ? 'Logout' : 'Login';
            setLogInText(logInText);
          }}
        >
          {logInText}
        </button>
      </ul>
    </header>
  );
};

export default HeaderComponent;