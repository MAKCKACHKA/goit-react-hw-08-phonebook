import { useAuth } from 'hooks';
import { Link, Navigate } from 'react-router-dom';

import { Center, Text } from '@chakra-ui/react';
import css from '../syles.module.css';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <Navigate to="/goit-react-hw-08-phonebook/contacts" />
    </>
  ) : (
    <Center fontSize="5xl" h="100%">
      <nav>
        <Link
          className={css.link}
          to="/goit-react-hw-08-phonebook/register"
          end="true"
        >
          {' '}
          Sign up
        </Link>
        <Text color={'teal'} fontSize="4xl" display="inline">
          {' '}
          or{' '}
        </Text>
        <Link className={css.link} to="/goit-react-hw-08-phonebook/login">
          Login
        </Link>
      </nav>
    </Center>
  );
};
export default Home;
