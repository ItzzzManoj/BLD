import { useState } from "react";

const LoginStatusComponent = () => {

  let [ loginStatus, setLoginStatus ] = useState("Logout");

  return (
    <button
      type="button"
      onClick={
        () => {
          loginStatus = loginStatus === 'Logout' ? 'Login' : 'Logout';
          setLoginStatus(loginStatus);
        }
      }
    >
      {loginStatus}
    </button>
  );
};

export default LoginStatusComponent;