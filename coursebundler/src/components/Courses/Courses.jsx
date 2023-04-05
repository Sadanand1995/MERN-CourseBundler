import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web Development',
    'Artiicial Itellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  const addToPlaylistHandler = () => {
    console.log('Added to playlist');
  };

  const Course = ({
    views,
    imageSrc,
    title,
    id,
    addToPlaylistHandler,
    creator,
    description,
    lectureCount,
  }) => {
    return (
      <VStack className="course" alignItems={['center', 'flex-start']}>
        <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
        <Heading
          textAlign={['center', 'left']}
          maxW={'200px'}
          size={'md'}
          fontFamily={'sans-serif'}
          noOfLines={3}
          children={title}
        />
        <Text noOfLines={2} children={description} />
        <HStack>
          <Text
            fontWeight={'bold'}
            textTransform={'uppercase'}
            children={'Creator'}
          />
          <Text
            fontFamily={'body'}
            textTransform={'uppercase'}
            children={creator}
          />
        </HStack>
        <Heading
          textAlign={'center'}
          size="xs"
          children={`Lectures : ${lectureCount}`}
          textTransform="uppercase"
        />
        <Heading
          size="xs"
          children={`Views : ${views}`}
          textTransform="uppercase"
        />
        <Stack direction={['column', 'row']} alignItems={'center'}>
          <Link to={`/course/${id}`}>
            <Button colorScheme={'yellow'}>Watch Now</Button>
          </Link>
          <Button
            colorScheme={'yellow'}
            variant={'ghost'}
            onClick={() => addToPlaylistHandler(id)}
          >
            Add To Playlist
          </Button>
        </Stack>
      </VStack>
    );
  };

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY="8">
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course...."
        type={'text'}
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} minW={'60'} onClick={() => setCategory(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          views={23}
          imageSrc={
            'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          title={'sample'}
          id={'sample'}
          addToPlaylistHandler={addToPlaylistHandler}
          description={'sample'}
          creator={'sample'}
          lectureCount={5}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
