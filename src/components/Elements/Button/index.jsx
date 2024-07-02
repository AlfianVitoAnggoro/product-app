import PropTypes from 'prop-types';

const Button = props => {
  const {
    children = 'Submit',
    classname = 'bg-black',
    type = 'button',
    onClick = () => {},
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
