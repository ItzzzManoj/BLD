import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const HeaderComponent = () => {

  let [ logInText, setLogInText ] = useState('Login');

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt=""
          className="logo"
        />
        <span className="logo-name">BLD</span>
      </div>
      <ul>
        <li>About Us</li>
        <li>Cart</li>
        <li>Available Locations</li>
        <li>Account Details</li>
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