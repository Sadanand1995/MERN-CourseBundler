import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import { HiOutlinePlay } from 'react-icons/hi';
import { HiOutlinePause } from 'react-icons/hi';
import vg from '../../assets/images/vg2.png';
import introVideo from '../../assets/videos/intro.mp4';
import './home.scss';

const Home = () => {
  const videoRef = useRef();
  const [playState, setPlayState] = useState(false);
  const player = () => {
    if (playState) {
      videoRef.current.pause();
      setPlayState(false);
    } else {
      videoRef.current.play();
      setPlayState(true);
    }
  };
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack w={'full'} alignItems={['center', 'flex-end']} spacing={'8'}>
            <Heading
              size={'2xl'}
              textTransform="uppercase"
              textAlign={'center'}
            >
              Learn From Experts
            </Heading>
            <Text
              textAlign={'center'}
              children="Find Valuable Content At Reasonable Price"
            />
            <Link to="/cources">
              <Button size={'lg'} colorScheme={'yellow'}>
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>
      <Box bgColor={'blackAlpha.800'} p={'8'}>
        <Heading
          children="OUR BRANDS"
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
        />
        <HStack
          justifyContent={'space-evenly'}
          className="brandsBanner"
          marginTop={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="videoContainer">
        <video ref={videoRef} onClick={player} src={introVideo}></video>
        {playState ? (
          <HiOutlinePause onClick={player} />
        ) : (
          <HiOutlinePlay onClick={player} />
        )}
      </div>
    </section>
  );
};

export default Home;
