import AuthLayout from '../components/Layout/AuthLayout';
import FormLogin from '../components/Fragments/FormLogin';

const Login = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};
export default Login;
