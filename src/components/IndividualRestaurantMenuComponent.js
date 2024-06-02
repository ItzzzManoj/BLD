const IndividualRestaurantMenuComponent = (props) => {

  let {
    menuItems
  } = props;

  return (
    <div className="m-4">
      <h4 className="text-center py-4 text-2xl font-semibold">
        Available Items
      </h4>
      <ul className="flex flex-wrap justify-center">
        {
          menuItems.map((menu) => {
            const resInfo = menu.card.info;
            return (
              <li key={resInfo.id} className="w-60 h-40 bg-purple-100 p-4 m-4">
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