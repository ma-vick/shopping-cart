import { BsCartXFill } from 'react-icons/bs';
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

function Cart() {
  const { cartItems, setCartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <span className="cart-resume-content">
        <div className="cart-resume">{formatCurrency(totalPrice, "BRL")}</div>
        <button className="btn-remove-all" onClick={ () => setCartItems([]) }><BsCartXFill /></button>
      </span>
    </section>
  );
}

export default Cart;
