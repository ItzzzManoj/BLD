import { RES_IMG_URL } from '../utils/constants';

const IndividualRestaurantComponent = (props) => {
  let {
    dataObj: {
      info: {
        locality,
        cuisines = [],
        cloudinaryImageId,
        name,
        avgRating,
      } = {},
    } = {},
  } = props;

  return (
    <div>
      <div>
        <img
          src={ RES_IMG_URL + cloudinaryImageId }
          className="rounded-xl mx-auto w-[300px] h-[200px]"
        />
      </div>
      <h1 className="pt-4 pb-1 font-semibold text-xl">{name}</h1>
      <h2 className="py-1">Rating: {avgRating}</h2>
      <h3 className="py-1">{cuisines.join(", ")}</h3>
      <h4 className="py-1">{locality}</h4>
    </div>
  );
};

// Higher order component - (It's a function which takes in a componenent, enchance the component and returns it)

export const AddPromotedLabel = (IndividualRestaurantComponent) => {
  return (props) => {
    return (
      <div>
        <span className="absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-lg">
          Promoted
        </span>
        <IndividualRestaurantComponent { ...props } />
      </div>
    );
  };
};

export default IndividualRestaurantComponent;