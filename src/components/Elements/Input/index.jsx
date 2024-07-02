import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Input from './Input';
import Label from './label';

const InputForm = forwardRef((props, ref) => {
  const { htmlfor, textLabel, type, name, placeholder, classname = '' } = props;
  return (
    <div>
      <Label htmlfor={htmlfor}>{textLabel}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        classname={classname}
        ref={ref}
      />
    </div>
  );
});

InputForm.propTypes = {
  htmlfor: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

InputForm.displayName = 'InputForm';

export default InputForm;
