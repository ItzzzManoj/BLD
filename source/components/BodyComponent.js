import RestaurantsList from '../utils/mockdata';
import IndividualRestaurantComponent from './IndividualRestaurantComponent';

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input type="search" placeholder="Search..." />
        <button className='filter-btn'>
          Filter top restaurants
        </button>
      </div>
      <div className="card-container">
        {RestaurantsList.map((restaurant) => {
          return (
            <IndividualRestaurantComponent
              key={restaurant.info.id}
              dataObj={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;