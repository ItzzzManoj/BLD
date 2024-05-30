import IndividualRestaurantComponent from './IndividualRestaurantComponent';
import ShimmerComponent from './ShimmerComponent';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BodyComponent = () => {

  let [ resList, setResList ] = useState([]);

  let [ filteredResList, setFilteredResList ] = useState([]);

  let [ searchText, setSearchText ] = useState('');

  useEffect(() => {
      
    const callMe = async () => {
      let restaurantsData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      restaurantsData = await restaurantsData.json();
  
      let data = restaurantsData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      setResList(data);
      setFilteredResList(data);
    };

    callMe();

  }, []);



  return (resList.length === 0) ? <ShimmerComponent /> : 
    (
      <div className="body-container">
        <div className="search-container">
          <div>
            <input 
              type="search" 
              placeholder="Search..." 
              className="search-ipt" 
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button 
              type="button" 
              className="search-btn"
              onClick={() => {
                filteredResList = resList.filter(res => {
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
                setFilteredResList(filteredResList);
              }}
            >
              Search
            </button>
          </div>
          <button className='filter-btn' onClick={() => {
            let updatedResList = filteredResList.filter((restaurant) => {
              return restaurant.info.avgRating >= 4.3;
            });

            setFilteredResList(updatedResList);
          }}>
            Filter top restaurants
          </button>
        </div>
        <div className="card-container">
          {filteredResList.map((restaurant) => {
            return (
              <Link className="individual-card" to={"/restaurant-details/" + restaurant.info.id} key={restaurant.info.id}>
                <IndividualRestaurantComponent
                  dataObj={restaurant}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default BodyComponent;