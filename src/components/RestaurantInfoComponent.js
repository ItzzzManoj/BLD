const RestaurantInfoComponent = (props) => {
  
  let {
    resDetails: {
      name,
      avgRatingString,
      totalRatingsString,
      costForTwoMessage,
      city,
      locality,
      sla: {
        lastMileTravelString
      } = {}
    } = {}
  } = props;

  return (
    <div className="text-center p-4 m-4">
      <h2 className="text-3xl font-bold">
        {name}
      </h2>
      <div className="text-left border shadow-lg p-4 my-8 rounded-xl bg-gray-100">
        <p className="pb-2">
          Rating: {avgRatingString}({totalRatingsString}) | {costForTwoMessage}
        </p>
        <p className="pt-2 border-t">
          {city} | {locality} | {lastMileTravelString}
        </p>
      </div>
    </div>
  )
};

export default RestaurantInfoComponent;