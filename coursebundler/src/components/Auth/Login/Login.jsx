import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing="16">
        <Heading children={'Welcome to CourseBundler'} />
        <form action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email address -'} />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@email.com"
              type={'email'}
              focusBorderColor={'yellow.500'}
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children={'password -'} />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              type={'password'}
              focusBorderColor={'yellow.500'}
            />
          </Box>
          <Box>
            <Link to="/forgetpassword">
              <Button variant={'link'} fontSize={'md'}>
                Forget Password?
              </Button>
            </Link>
          </Box>
          <Button my={'4'} type={'submit'} colorScheme={'yellow'}>
            Log In
          </Button>
          <Box my={'4'}>
            New User?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant={'link'}>
                Sign Up
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
