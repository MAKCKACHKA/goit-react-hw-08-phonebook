import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';
import { Link, Navigate } from 'react-router-dom';

import { Button, Center, Flex } from '@chakra-ui/react';

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
          <Button
            h="25px"
            colorScheme="teal"
            _hover={{
              bg: 'teal',
              color: 'gray.700',
            }}
            type="button"
            variant="outline"
          >
            Back
          </Button>
        </Link>{' '}
      </nav>

      <Center>
        <Flex pt={'30vh'} flexDirection={'column'}>
          <LoginForm />
        </Flex>
      </Center>
    </>
  );
};
export default Login;
