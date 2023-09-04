import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Center, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Center borderBottom="1px" borderColor="green.700" p="10px" gap="10px">
      <Text fontSize="lg">Welcome, {user.email}</Text>
      <Button
        h="25px"
        colorScheme="teal"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Center>
  );
};
