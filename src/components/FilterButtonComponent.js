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
    <button className="bg-teal-200 px-4 py-2" onClick={getFilteredResList}>
      Filter top restaurants
    </button>
  );
};

export default FilterButtonComponent;