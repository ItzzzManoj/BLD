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
    <div className="individual-card-container">
      <div className="image-container">
        <img
          src={ RES_IMG_URL + cloudinaryImageId }
        />
      </div>
      <h1>{name}</h1>
      <h2>Rating: {avgRating}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{locality}</h4>
    </div>
  );
};

export default IndividualRestaurantComponent;