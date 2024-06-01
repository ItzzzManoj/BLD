import { useEffect, useState } from "react";
import { RES_LIST_URL } from "../constants";
import makeFetchCall from "../common-functions/makeFetchCall";

const useResList = () => {
  
  let [resList, setResList] = useState([]);

  let [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {

    const getResList = async () => {
      const restaurantsList = await makeFetchCall(RES_LIST_URL);

      let data = restaurantsList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      setResList(data);
      setFilteredResList(data);
    }

    getResList();
  }, []);

  return [resList, filteredResList, setFilteredResList];
};

export default useResList;