import {
  Avatar,
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

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing="16">
        <Heading children={'Registratiion'} textTransform={'uppercase'} />
        <form action="" style={{ width: '100%' }}>
          <Box my={'4'} display="flex" justifyContent={'center'}>
            <Avatar size={'2xl'} src={imagePrev} />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children={'Name -'} />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Your Name"
              type={'text'}
              focusBorderColor={'yellow.500'}
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email address -'} />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
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
          <Box my={'4'}>
            <FormLabel htmlFor="chooseavatar" children={'Choose Avatar -'} />
            <Input
              accept="image/*"
              required
              id="chooseavatar"
              type={'file'}
              focusBorderColor={'yellow.500'}
              onChange={changeImageHandler}
              css={{
                '&::file-selector-button': fileUploadCss,
              }}
            />
          </Box>
          <Button my={'4'} type={'submit'} colorScheme={'yellow'}>
            Sign Up
          </Button>
          <Box my={'4'}>
            Already Registered ?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} variant={'link'}>
                Log In
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
