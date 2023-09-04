import * as React from 'react';
import { Box, ChakraProvider, useColorModeValue } from '@chakra-ui/react';

import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

import { Layout } from './Layout/Layout';
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  // Chakra

  const bg = useColorModeValue('gray.700');
  const color = useColorModeValue('gray.300');
  return (
    <ChakraProvider>
      <Box bg={bg} color={color} w="100%" height="100vh">
        {isRefreshing ? (
          <b>Refreshing user...</b>
        ) : (
          <Routes>
            <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
          </Routes>
        )}
      </Box>
    </ChakraProvider>
  );
};
