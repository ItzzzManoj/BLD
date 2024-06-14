import DishDetailsComponent from "./DishDetailsComponent";
import { useState } from "react";

const RestaurantMenuComponent = (props) => {

  let {
    menuItems
  } = props;

  const [showMenu, setShowMenu] = useState(null);

  let individualMenuList = menuItems.filter(restaurant => {
    return restaurant.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  });

  return (
    <div className="m-4">
      {
        individualMenuList.map((itemCategory, index) => {
          let {
            card: {
              card: {
                title
              } = {}
            } = {}
          } = itemCategory;
          return <DishDetailsComponent 
            itemCategory={itemCategory} 
            key={title} 
            showMenu={showMenu === index}
            setShowMenu={() => {
              if (showMenu === index) {
                return setShowMenu(null);
              }
              setShowMenu(index)
            }}
          />;
        })
      }
    </div>
  );
};

export default RestaurantMenuComponent;