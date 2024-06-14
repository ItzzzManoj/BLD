import { useSelector } from "react-redux";
import IndividualItemComponent from "../IndividualItemComponent";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/Store/cartSlice";

const CartComponent = () => {

  const cartItems = useSelector(store => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold pt-4">
          Cart is empty! Add items
        </h1>
      </div>
    );
  }

  return (
    <div className="p-4 text-center w-6/12 mx-auto">
      
      <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
        Clear cart
      </button>

      <div className="mt-10 border-top-2">
       {
         cartItems.map((itemCard, index) => {
          return (
            <IndividualItemComponent itemCard={itemCard} key={index} />
          );
         })
       }
      </div>
    
    </div>
  );
};

export default CartComponent;

