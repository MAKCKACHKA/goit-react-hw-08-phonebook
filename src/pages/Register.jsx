import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';
import { Link, Navigate } from 'react-router-dom';
import { Button, Center, Flex } from '@chakra-ui/react';

export const Register = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <Navigate to="/goit-react-hw-08-phonebook/contacts" />
    </>
  ) : (
    <>
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
      <Center>
        <Flex pt={'30vh'} flexDirection={'column'}>
          <RegisterForm />
        </Flex>
      </Center>
    </>
  );
};
export default Register;
