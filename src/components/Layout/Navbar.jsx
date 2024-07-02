import { useState } from 'react';
import { uselogin } from '../../hooks/useLogin';
import Button from '../Elements/Button';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTotalPrice } from '../../context/TotalPriceContext';

const Navbar = () => {
  const username = uselogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector(state => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };
  return (
    <div className="flex justify-end items-center h-14 bg-blue-500 text-white">
      <h3>{username}</h3>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        item: {totalCart} | price: ${total}
      </div>
      <Button classname="bg-black mx-5" onClick={() => handleLogout()}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
