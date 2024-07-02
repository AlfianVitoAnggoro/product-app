import PropTypes from 'prop-types';
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const CardProduct = props => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between mx-3">
      {children}
    </div>
  );
};

const Header = ({ image, id }) => {
  return (
    <div className="px-5">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt="product"
          className="p-8 rounded-t-lg h-60 w-full object-cover"
        />
      </Link>
    </div>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="px-5 pb-3 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white ">
          {title.substring(0, 20)}...
        </h5>
      </a>
      <p className="text-m text-white">{children.substring(0, 100)}...</p>
    </div>
  );
};

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="test-3xl font-bold text-white">
        ${' '}
        {price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}
      </span>
      <Button
        classname="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to Chart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

CardProduct.propTypes = {
  children: PropTypes.array,
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Body.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

Footer.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProduct;
