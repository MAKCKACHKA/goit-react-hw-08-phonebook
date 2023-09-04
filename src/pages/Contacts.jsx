import { Title1, Title2 } from '../components/Styles';

import ContactForm from '../components/Contacts/ContactForm';
import Filter from '../components/Contacts/Filter';
import ContactList from '../components/Contacts/ContactList';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react';

const Contacts = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Center>
      <Box>
        <Title1>Phonebook</Title1>
        <ContactForm />
        <Title2>Contacts</Title2>
        <Filter />
        <ContactList />
      </Box>
    </Center>
  ) : (
    <>
      <Navigate to="/goit-react-hw-08-phonebook" />
    </>
  );
};
export default Contacts;
