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
    <div className="search-container">
      <div>
        <input 
          type="search" 
          placeholder="Search Restaruant" 
          className="search-input" 
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button 
          type="button" 
          className="search-btn"
          onClick={getFilteredResList}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;