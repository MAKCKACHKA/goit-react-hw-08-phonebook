import { useDispatch } from 'react-redux';
import { register, logIn } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button, Center, Input, Text } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Center>
        <Text fontSize={'4xl'}>Registration</Text>
      </Center>

      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <Input type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Input type="password" name="password" />
        </label>
        <Center>
          <Button
            colorScheme="teal"
            _hover={{
              bg: 'teal',
              color: 'gray.700',
            }}
            type="submit"
          >
            Register
          </Button>
        </Center>
      </form>
    </>
  );
};
