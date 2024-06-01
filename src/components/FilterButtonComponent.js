const FilterButtonComponent = (props) => {
  
  let {
    filteredResList,
    setFilteredResList
  } = props;

  const getFilteredResList = () => {
    const updatedResList = filteredResList.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.3;
    });

    setFilteredResList(updatedResList);
  }

  return (
    <button className="filter-btn" onClick={getFilteredResList}>
      Filter top restaurants
    </button>
  );
};

export default FilterButtonComponent;