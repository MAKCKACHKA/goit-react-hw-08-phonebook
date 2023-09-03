import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const Register = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <Navigate to="/goit-react-hw-08-phonebook/contacts" />
    </>
  ) : (
    <RegisterForm />
  );
};
export default Register;
