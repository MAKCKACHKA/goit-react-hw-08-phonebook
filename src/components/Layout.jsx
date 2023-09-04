import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Center, Text } from '@chakra-ui/react';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && <UserMenu />}
      <Suspense
        fallback={
          <Center pt={'45vh'}>
            {' '}
            <Text fontSize="6xl">Loading...</Text>
          </Center>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
