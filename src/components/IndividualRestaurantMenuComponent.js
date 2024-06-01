const IndividualRestaurantMenuComponent = (props) => {

  let {
    menuItems
  } = props;

  return (
    <div className="res-menu-container">
      <h4>
        Available Items
      </h4>
      <ul>
        {
          menuItems.map((menu) => {
            const resInfo = menu.card.info;
            return (
              <li key={resInfo.id}>
                {resInfo.name} - {"Rs." + resInfo.price/100}
              </li>

            );
          })
        }
      </ul>
    </div>
  );
};

export default IndividualRestaurantMenuComponent;