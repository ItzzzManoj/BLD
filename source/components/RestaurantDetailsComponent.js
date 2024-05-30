import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";

const RestaurantDetailsComponent = () => {

  const [resDetails, setResDetails] = useState(null);

  const [menuItems, setMenuItems] = useState([]);

  const params = useParams();

  useEffect(() => {

    const fetchResDetails = async () => {

      const RES_DETAILS_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=${params.resId}&catalog_qa=undefined`;

      const response = await fetch(RES_DETAILS_URL);

      const json = await response.json();

      const resDetails = json?.data?.cards[2]?.card.card.info;

      let resMenuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

      resMenuItems = resMenuItems?.itemCards ? resMenuItems?.itemCards : resMenuItems?.categories[0]?.itemCards;

      setResDetails(resDetails);
      setMenuItems(resMenuItems);
    }

    fetchResDetails();

  }, []);

  if (resDetails === null) {
    return <ShimmerComponent />
  }

  return (
    <div className="res-details-container">
      <div className="restaurant-details">
        <h2>
          Welcome to {resDetails.name}!
        </h2>
        <p>
          Locality: {resDetails.locality}
        </p>
        <p>
          Cost for Two: {resDetails.costForTwoMessage}
        </p>
        <p>
          Average Rating: {resDetails.avgRatingString}
        </p>
        <p>
          Locality: {resDetails.locality}
        </p>
        <p>
          Area Name: {resDetails.areaName}
        </p>
        <p>
          Ratings: {resDetails.totalRatingsString}
        </p>
      </div>
      <div className="res-menu-container">
        <h4>
          Available Items
        </h4>
        <ul>
          {
            menuItems.map((menu) => {
              const resInfo = menu.card.info;
              return (
                <li key={resInfo.id}>
                  {resInfo.name} - {"Rs." + resInfo.price/100}
                </li>

              );
            })
          }
        </ul>
      </div>
    </div>
  )
};

export default RestaurantDetailsComponent;