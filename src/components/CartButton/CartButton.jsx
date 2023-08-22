import { BsCart2 } from "react-icons/bs";
import "./CartButton.css";

function CartButton() {
  return (
    <button className="cart-btn">
      <BsCart2 />
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;
