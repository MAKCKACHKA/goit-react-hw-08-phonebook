import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <Navigate to="/goit-react-hw-08-phonebook/contacts" />
    </>
  ) : (
    <LoginForm />
  );
};
export default Login;
