import { useEffect, useState } from "react";
import makeFetchCall from "../common-functions/makeFetchCall";

const useResDetails = (params) => {

  let {
    resId
  } = params;

  const [resDetails, setResDetails] = useState(null);

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {

    const getResDetails = async () => {
      
      const resInfo = await makeFetchCall(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=${resId}`);

      const resDetails = resInfo?.data?.cards[2]?.card.card.info;

      let resMenuItems = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

      resMenuItems = resMenuItems?.itemCards ? resMenuItems?.itemCards : resMenuItems?.categories[0]?.itemCards;

      setResDetails(resDetails);
      setMenuItems(resMenuItems)
    };

    getResDetails();
  }, []);

  return [resDetails, menuItems];
};

export default useResDetails;