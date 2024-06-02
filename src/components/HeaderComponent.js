import { LOGO_URL } from '../utils/constants';
import { Link } from "react-router-dom";
import LoginStatusComponent from './navigation-menu/LoginStatusComponent';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

const HeaderComponent = () => {

  let onlineStatus = useOnlineStatus();

  onlineStatus = onlineStatus === 'online' ? '✅' : '🔴';

  return (
    <header className="flex justify-between items-center py-4 px-2 m-1 bg-red-100">
      <Link to="/">
        <div className="flex items-center">
          <img
            src={LOGO_URL}
            alt="BLD Logo"
            className="w-20"
          />
          <span className="font-bold px-2 text-2xl">
            BLD
          </span>
        </div>
      </Link>
      <ul className="flex items-center">
        <li className="px-2">
          Online Status: 
          <span className="px-1">
            { onlineStatus }
          </span>
        </li>
        <li className="px-2">
          <Link to="/about">
            About Us
            </Link>
        </li>
        <li className="px-2">
          <Link to="/cart">
            Cart
          </Link>
        </li>
        <li className="px-2">
          <Link to="/available-locations">
            Available Locations
          </Link>
        </li>
        <li className="px-2">
          <Link to="/instamart">
            Instamart
          </Link>
        </li>
        <li className="px-2">
          <LoginStatusComponent />
        </li>
      </ul>
    </header>
  );
};

export default HeaderComponent;