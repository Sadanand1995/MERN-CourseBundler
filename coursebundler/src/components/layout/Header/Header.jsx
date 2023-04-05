import React from 'react';
import ColorModeSwitcher from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isAuthenticated = false;
  const user = {
    role: 'admin',
  };
  const logoutHandler = () => {
    console.log('logout');
    onClose();
  };

  const LinkButton = ({ url = '/', title = 'Home' }) => (
    <Link to={url}>
      <Button variant={'ghost'} onClick={onClose}>
        {title}
      </Button>
    </Link>
  );
  return (
    <>
      <ColorModeSwitcher />
      <Button
        colorScheme={'yellow'}
        rounded={'full'}
        height={'12'}
        w={'12'}
        pos={'fixed'}
        left={'4'}
        top={'4'}
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'} textAlign={'center'}>
            CourseBundler
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton url="/" title="home" />
              <LinkButton url="/courses" title="Browse All Cources" />
              <LinkButton url="/request" title="Request a Coourse" />
              <LinkButton url="/contact" title="Contact Us" />
              <LinkButton url="/about" title="About" />
              <HStack
                justifyContent={'space-evenly'}
                pos={'absolute'}
                bottom={'2rem'}
                w={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button
                            colorScheme={'yellow'}
                            variant={'ghost'}
                            onClick={onClose}
                          >
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Log Out
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard">
                          <Button
                            colorScheme={'purple'}
                            variant={'ghost'}
                            onClick={onClose}
                          >
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme={'yellow'} onClick={onClose}>
                        Login
                      </Button>
                    </Link>
                    <p>Or</p>
                    <Link to="/register">
                      <Button colorScheme={'yellow'} onClick={onClose}>
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
