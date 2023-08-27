import { BsCart2 } from "react-icons/bs";
import "./CartButton.css";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button 
      className="cart-btn"
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <BsCart2 />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}

export default CartButton;
