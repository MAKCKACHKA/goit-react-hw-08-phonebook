import { useAuth } from 'hooks';
import { Link, Navigate } from 'react-router-dom';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <Navigate to="/goit-react-hw-08-phonebook/contacts" />
    </>
  ) : (
    <nav>
      <Link to="/goit-react-hw-08-phonebook/register" end="true">
        Sign up
      </Link>
      <Link to="/goit-react-hw-08-phonebook/login">Login</Link>
    </nav>
  );
};
export default Home;
