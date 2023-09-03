import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <Navigate to="/goit-react-hw-08-phonebook/contacts" />
    </>
  ) : (
    <>
      <nav>
        <Link to="/goit-react-hw-08-phonebook" end="true">
          Home
        </Link>
      </nav>
      <LoginForm />
    </>
  );
};
export default Login;
