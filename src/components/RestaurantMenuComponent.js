import DishDetailsComponent from "./DishDetailsComponent";

const RestaurantMenuComponent = (props) => {

  let {
    menuItems
  } = props;

  let individualMenuList = menuItems.filter(restaurant => {
    return restaurant.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  });

  return (
    <div className="m-4">
      {
        individualMenuList.map((itemCategory) => {
          let {
            card: {
              card: {
                title
              } = {}
            } = {}
          } = itemCategory;
          return <DishDetailsComponent itemCategory={itemCategory} key={title} />;
        })
      }
    </div>
  );
};

export default RestaurantMenuComponent;