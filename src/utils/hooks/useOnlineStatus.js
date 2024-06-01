import { useState } from "react";

const useOnlineStatus = () => {
  
  const [currentStatus, setCurrentStatus] = useState("online");

  window.addEventListener("online", () => {
    setCurrentStatus("online");
  });

  window.addEventListener("offline", () => {
    setCurrentStatus("offline");
  });

  return currentStatus;
};

export default useOnlineStatus;