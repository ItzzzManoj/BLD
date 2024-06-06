import { useState } from "react";
import IndividualItemComponent from "./IndividualItemComponent";

const DishDetailsComponent = ({ itemCategory }) => {
  
  let {
    card: {
      card: {
        title,
        itemCards = []
      } = {}
    } = {}
  } = itemCategory;

  let [showMenu, setShowMenu] = useState(false);

  function getShowMenu() {
    setShowMenu(!showMenu);
  }
  
  return (
    <div>
      <div className="p-4 bg-gray-100 m-4 flex justify-between" onClick={getShowMenu}>
        <span>
          {title}
        </span>
        <span>
          ⬇
        </span>
      </div>
      
      {
        showMenu &&
        <div>
          {
            itemCards.map((itemCard) => {
              return <IndividualItemComponent itemCard={itemCard}/>;
            })
          }
        </div>
      } 
    
    </div>
  );
};

export default DishDetailsComponent;