import { useParams } from "react-router-dom";
import ShimmerComponent from "./loading-state/ShimmerComponent";
import useResDetails from "../utils/hooks/useResDetails";
import RestaurantMenuComponent from "./RestaurantMenuComponent";
import RestaurantInfoComponent from "./RestaurantInfoComponent";

const RestaurantDetailsComponent = () => {

  const params = useParams();

  const [resDetails, menuItems] = useResDetails(params);

  if (resDetails === null) {
    return <ShimmerComponent />
  }

  return (
    <div className="w-6/12 mx-auto">
      <RestaurantInfoComponent resDetails={resDetails} />
      <RestaurantMenuComponent menuItems={menuItems} />
    </div>
  )
};

export default RestaurantDetailsComponent;