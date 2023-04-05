import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/myPic.jpg';
import introVideo from '../../assets/videos/intro.mp4';
import termsAndConditions from '../../assets/docs/termsAndCondition';
import './about.scss';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} p="8">
    <VStack>
      <Avatar boxSize={['40', '48']} src={avatar} />
      <Text children="Co-Founder" opacity={'0.7'} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Sadanand Singh" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am a full-stack Developer.
      Our mission is to provide quality content at reasoonable price`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => {
  return (
    <Box className="container2" h={['20vh', '65vh']}>
      <video
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </Box>
  );
};

const TandC = ({ termsAndConditions }) => (
  <Box>
    <Heading
      size={'md'}
      textAlign={['center', 'left']}
      my={'4'}
      children="Terms & Conditions"
    />
    <Box h={'sm'} p={'4'} overflowY="scroll">
      <Text
        textAlign={['center', 'left']}
        letterSpacing="widest"
        fontFamily={'heading'}
      >
        {termsAndConditions}
      </Text>
      <Heading
        size={'xs'}
        my="4"
        children="Refund only applicable for cancelation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} p="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text m={'8'} textAlign={['center', 'left']} fontFamily="sans-serif">
          We are video streaming platform with some premimum courses available
          only for premimum users.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plans
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndConditions={termsAndConditions} />
      <HStack my={'4'} p="4">
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is secured by Razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
