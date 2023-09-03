import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import { useAuth } from 'hooks';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn && <UserMenu />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
