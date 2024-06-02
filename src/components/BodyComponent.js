import IndividualRestaurantComponent from './IndividualRestaurantComponent';
import SearchComponent from './SearchComponent';
import FilterButtonComponent from './FilterButtonComponent';
import ShimmerComponent from './loading-state/ShimmerComponent';
import { Link } from 'react-router-dom';
import useResList from '../utils/hooks/useResList';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import OfflineComponent from './OfflineComponent';

const BodyComponent = () => {

  let [ resList, filteredResList, setFilteredResList ] = useResList();

  let currentStatus = useOnlineStatus();

  if (currentStatus === 'offline') {
    return <OfflineComponent />
  }

  if (!resList.length) {
    return <ShimmerComponent />;
  }

  return (
    <div className="px-4">
      
      <div className="flex py-4 px-8 justify-between items-center">
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
      
      <div className="flex flex-wrap justify-center">
        {
          filteredResList.map((restaurant) => {
            const resRoute = "/restaurant-details/" + restaurant.info.id;
            
            return (
              <Link className="p-4 m-4 w-[325px] border border-solid hover:bg-gray-100" to={resRoute} key={restaurant.info.id}>
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