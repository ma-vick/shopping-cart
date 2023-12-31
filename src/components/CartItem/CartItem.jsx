import propTypes from "prop-types";
import { BsCartDashFill } from "react-icons/bs";
import "./CartItem.css";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const uptadedItems = cartItems.filter((item) => item.id != id);
    setCartItems(uptadedItems);
  };

  return (
    <div className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
        <button className="cart-item-btn" onClick={handleRemoveItem}>
          <BsCartDashFill />
        </button>
      </div>
    </div>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
