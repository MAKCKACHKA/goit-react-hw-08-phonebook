import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';
import { Link, Navigate } from 'react-router-dom';

export const Register = () => {
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
      <RegisterForm />
    </>
  );
};
export default Register;
