import { useState } from "react";

const SearchComponent = (props) => {

  let {
    resList,
    filteredResList,
    setFilteredResList
  } = props;

  let [ searchText, setSearchText ] = useState('');

  const getFilteredResList = () => {
    
    filteredResList = resList.filter(res => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredResList(filteredResList);
  };
  
  return (
    <div>
      <div>
        <input 
          type="search" 
          placeholder="Search Restaruant" 
          className="border border-solid px-4 py-2" 
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button 
          type="button" 
          className="search-btn px-4 py-2 border bg-sky-200"
          onClick={getFilteredResList}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;