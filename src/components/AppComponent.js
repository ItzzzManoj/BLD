import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default AppComponent;