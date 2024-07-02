import { useRef, useEffect, useState } from 'react';
import { login } from '../../services/auth.service';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input/Index';
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('');
  const handleLogin = e => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = '/products';
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          htmlfor="username"
          textLabel="Username"
          type="text"
          name="username"
          placeholder="Username"
          ref={usernameRef}
        />
        <InputForm
          htmlfor="password"
          textLabel="Password"
          type="password"
          name="password"
          placeholder="******"
        />
        <Button classname="my-3 w-full bg-slate-600" type="submit">
          Login
        </Button>
      </form>
      {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
    </>
  );
};
export default FormLogin;
