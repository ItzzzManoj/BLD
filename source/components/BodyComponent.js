import IndividualRestaurantComponent from './IndividualRestaurantComponent';
import RestaurantsList  from '../utils/mockdata';
import { useState } from 'react';

const BodyComponent = () => {

  let [ resList, setResList ] = useState(RestaurantsList);

  return (
    <div className="body-container">
      <div className="search-container">
        <input type="search" placeholder="Search..." />
        <button className='filter-btn' onClick={() => {
          let updatedResList = resList.filter((restaurant) => {
            return restaurant.info.avgRating >= 4;
          });

          setResList(updatedResList);
        }}>
          Filter top restaurants
        </button>
      </div>
      <div className="card-container">
        {resList.map((restaurant) => {
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