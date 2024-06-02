import { useParams } from "react-router-dom";
import ShimmerComponent from "./loading-state/ShimmerComponent";
import useResDetails from "../utils/hooks/useResDetails";
import IndividualRestaurantMenuComponent from "./IndividualRestaurantMenuComponent";
import IndividualRestaurantInfoComponent from "./IndividaualRestaurantInfoComponent";

const RestaurantDetailsComponent = () => {

  const params = useParams();

  const [resDetails, menuItems] = useResDetails(params);

  if (resDetails === null) {
    return <ShimmerComponent />
  }

  return (
    <div>
      <IndividualRestaurantInfoComponent resDetails={resDetails} />
      <IndividualRestaurantMenuComponent menuItems={menuItems} />
    </div>
  )
};

export default RestaurantDetailsComponent;