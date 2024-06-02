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

export default IndividualRestaurantComponent;