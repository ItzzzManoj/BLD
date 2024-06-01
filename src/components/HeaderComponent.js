import { LOGO_URL } from '../utils/constants';
import { Link } from "react-router-dom";
import LoginStatusComponent from './navigation-menu/LoginStatusComponent';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

const HeaderComponent = () => {

  let onlineStatus = useOnlineStatus();

  onlineStatus = onlineStatus === 'online' ? '✅' : '🔴';

  return (
    <header className="header">
      <Link to="/">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="BLD Logo"
            className="logo"
          />
          <span className="logo-name">
            BLD
          </span>
        </div>
      </Link>
      <ul>
        <li>
          { onlineStatus }
        </li>
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
          <Link to="/instamart">
            Instamart
          </Link>
        </li>
        <LoginStatusComponent />
      </ul>
    </header>
  );
};

export default HeaderComponent;