const IndividualRestaurantInfoComponent = (props) => {
  
  let {
    resDetails
  } = props;

  return (
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
  );

};

export default IndividualRestaurantInfoComponent;