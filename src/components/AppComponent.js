import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "../utils/Store/appStore";
import UserContext from "../utils/contexts/UserContext";
import { useState } from "react";
import { useContext } from "react";

const AppComponent = () => {

  let {
    user
  } = useContext(UserContext);

  const [userName, setUserName] = useState(user);

  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ user: userName, setUserName}}>
        <div>
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppComponent;