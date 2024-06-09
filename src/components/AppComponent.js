import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "../utils/Store/appStore";

const AppComponent = () => {
  return (
    <Provider store={AppStore}>
      <div>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </div>
    </Provider>
  );
};

export default AppComponent;