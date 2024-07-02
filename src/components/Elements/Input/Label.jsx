import PropTypes from 'prop-types';

const Label = props => {
  const { htmlfor, classname = '', children } = props;
  return (
    <label
      htmlFor={htmlfor}
      className={`block text-sm font-medium leading-6 text-gray-900 ${classname}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlfor: PropTypes.string.isRequired,
  classname: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Label;
