import IndividualRestaurantComponent from './IndividualRestaurantComponent';
import SearchComponent from './SearchComponent';
import FilterButtonComponent from './FilterButtonComponent';
import ShimmerComponent from './loading-state/ShimmerComponent';
import { Link } from 'react-router-dom';
import useResList from '../utils/hooks/useResList';

const BodyComponent = () => {

  let [ resList, filteredResList, setFilteredResList ] = useResList();

  if (!resList.length) {
    return <ShimmerComponent />;
  }

  return (
    <div className="body-container">
      
      <div className="search-filter-container">
        <SearchComponent 
          resList={resList}
          filteredResList={filteredResList}
          setFilteredResList={setFilteredResList}
        />
        <FilterButtonComponent
          filteredResList={filteredResList}
          setFilteredResList={setFilteredResList}
        />
      </div> 
      
      <div className="card-container">
        {
          filteredResList.map((restaurant) => {
            const resRoute = "/restaurant-details/" + restaurant.info.id;
            
            return (
              <Link className="individual-card" to={resRoute} key={restaurant.info.id}>
                <IndividualRestaurantComponent
                  dataObj={restaurant}
                />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default BodyComponent;