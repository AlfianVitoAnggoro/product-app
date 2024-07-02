import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';

const AuthLayout = props => {
  const { title, children, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && 'bg-slate-900'
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute top-2 right-2 bg-blue-500 p-2 text-white rounded"
          onClick={() => setIsDarkMode(isDarkMode ? false : true)}
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
        <h1 className="text-3xl text-blue-600">{title}</h1>
        <p>Welcome, Please enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === 'login') {
    return (
      <p className="text-sm mt-5 text-center">
        Don't Have Account ?
        <Link to="/register" className="font-bold text-blue-600 ml-3">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Have an Account ?
        <Link to="/login" className="font-bold text-blue-600 ml-3">
          Login
        </Link>
      </p>
    );
  }
};

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  type: PropTypes.string.isRequired,
};
export default AuthLayout;
