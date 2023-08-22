import propTypes from 'prop-types';
import { BsFillCartPlusFill } from "react-icons/bs";
import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {
  const {thumbnail, title, price} = data;

  return (
    <div className="product-card">
      <img className='card-img' src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={title} />
      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button className="btn-addcart"><BsFillCartPlusFill /></button>
    </div>
  )
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;