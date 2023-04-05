import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} minH={'10vh'} bg={'blackAlpha.900'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} w={'full'}>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            children="@ Sadanand Singh Chuahan"
            color={'yellow.400'}
            fontFamily="body"
            size={'sm'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a
            href="https://youtube.com/@sadanandsinghchauhan8811"
            target={'blank'}
          >
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com/introvert_sada" target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/Sadanand1995" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
