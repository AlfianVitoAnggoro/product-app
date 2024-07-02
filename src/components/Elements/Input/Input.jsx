import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder, classname = '' } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`block w-full rounded-md border-solid py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 ${classname}`}
      ref={ref}
    />
  );
});

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};

Input.displayName = 'Input';

export default Input;
