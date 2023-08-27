import propTypes from 'prop-types';
import { BsFillCartPlusFill } from "react-icons/bs";
import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
  const {thumbnail, title, price} = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);

  return (
    <div className="product-card">
      <img className='card-img' src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={title} />
      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button 
        className="btn-addcart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </div>
  )
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;