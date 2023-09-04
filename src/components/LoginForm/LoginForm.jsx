import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button, Center, Input, Text } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
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
        <Text fontSize={'4xl'}>Login</Text>
      </Center>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <Input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Input type="password" name="password" placeholder="*************" />
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
            Login
          </Button>
        </Center>{' '}
      </form>
    </>
  );
};
