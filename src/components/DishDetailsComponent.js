import { useState } from "react";
import IndividualItemComponent from "./IndividualItemComponent";

const DishDetailsComponent = ({ itemCategory, showMenu, setShowMenu }) => {
  
  let {
    card: {
      card: {
        title,
        itemCards = []
      } = {}
    } = {},
  } = itemCategory;

  function getShowMenu() {
    setShowMenu();
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
              return <IndividualItemComponent itemCard={itemCard} key={itemCard.card.info.id}/>;
            })
          }
        </div>
      } 
    
    </div>
  );
};

export default DishDetailsComponent;