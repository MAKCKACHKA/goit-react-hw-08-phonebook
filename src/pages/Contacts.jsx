import { Title1, Title2 } from '../components/Styles';

import ContactForm from '../components/Contacts/ContactForm';
import Filter from '../components/Contacts/Filter';
import ContactList from '../components/Contacts/ContactList';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const Contacts = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Title2>Contacts</Title2>
      <Filter />
      <ContactList />
    </>
  ) : (
    <>
      <Navigate to="/goit-react-hw-08-phonebook" />
    </>
  );
};
export default Contacts;
