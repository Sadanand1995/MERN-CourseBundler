import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p="16">
      <Heading children="Welcome" m={'8'} textAlign="center" />
      <VStack
        alignItems={'stretch'}
        boxShadow="lg"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box bg={'yellow.400'} p="4" css={{ borderRadius: '8px 8px 0 0' }}>
          <Text children={`Pro Pack -₹299.00`} color="black" />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} mt="4" px={'8'} spacing="8">
            <Text children="Join pro pack to get access to all content." />
            <Heading size={'md'} children={`₹299 Only`} />
          </VStack>
          <Button my={'8'} width="full" colorScheme={'yellow'}>
            Buy Now
          </Button>
        </Box>
        <Box bg={'blackAlpha.600'} p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            color={'white'}
            textTransform="uppercase"
            size={'sm'}
            children={`100% refund at cancellation`}
          />
          <Text
            mt={'1'}
            size={'xs'}
            color="white"
            children="*Terms & Conditions apply"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
