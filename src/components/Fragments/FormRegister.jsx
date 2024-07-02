import PropTypes from 'prop-types';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input/Index';
const FormRegister = props => {
  const { classname } = props;
  return (
    <div className={classname}>
      <form action="">
        <InputForm
          htmlfor="nama"
          textLabel="Nama"
          type="text"
          name="nama"
          placeholder="Nama"
        />
        <InputForm
          htmlfor="email"
          textLabel="Email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <InputForm
          htmlfor="password"
          textLabel="Password"
          type="password"
          name="password"
          placeholder="******"
        />
        <InputForm
          htmlfor="confirmPassword"
          textLabel="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="******"
        />
        <Button classname="bg-black my-3 w-full">Register</Button>
      </form>
    </div>
  );
};
FormRegister.propTypes = {
  classname: PropTypes.string.isRequired,
};
export default FormRegister;
