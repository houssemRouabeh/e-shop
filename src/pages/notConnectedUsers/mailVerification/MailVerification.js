import {
  Box,
  Button,
  Center,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import logo from '../../../assets/logo/logo.svg';
import { auth } from '../../../config/firebase';
import Navbar from '../../../components/navbar/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MailVerification = () => {
  console.log(auth.currentUser);
  const email = auth.currentUser.email;
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate('/signin');
  };

  return (
    <>
      <Navbar />
      <Box height="100vh">
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          size="xl"
          // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
          blockScrollOnMount={false}
          trapFocus={false}
        >
          <ModalOverlay />
          <ModalContent borderRadius="2xl" mx="4">
            <ModalCloseButton />
            <ModalBody>
              <Stack
                maxW="xl"
                mx="auto"
                py={{
                  base: '12',
                  md: '16',
                }}
                spacing={{
                  base: '2',
                  md: '4',
                }}
              >
                <Center>
                  <Link to={'/'}>
                    <Image
                      src={logo}
                      alt="bookStore logo"
                      maxH="200px"
                      minW="200px"
                    />
                  </Link>
                </Center>
                <Stack spacing="3" textAlign="center">
                  <Text
                    color={useColorModeValue('purple.500', 'purple.200')}
                    fontWeight="extrabold"
                    fontSize={{
                      base: 'xl',
                      md: '2xl',
                    }}
                    textTransform="uppercase"
                    transform="scale(1.2)"
                  >
                    Please verify your email
                  </Text>
                  <Center>
                    <Text fontSize="lg">
                      You're almost there ! We sent an email to <br />
                      <Box as="span" whiteSpace="nowrap" fontWeight="bold">
                        {email}
                      </Box>
                      <br />
                      <br /> Just click on the link in that email to complete
                      your signup.
                      <br />
                      if you don't see it, you may need to check your spam
                      folder.
                      <br />
                      <br />
                      Still can't find the email?
                    </Text>
                  </Center>
                </Stack>
                <Button
                  type="submit"
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="md"
                  colorScheme="purple"
                  size="lg"
                >
                  Resend Email Verification
                </Button>
                <Center>
                  <Text>
                    Need help?{' '}
                    <Link
                      fontSize="sm"
                      textAlign="center"
                      color={useColorModeValue('gray.600', 'gray.400')}
                      textDecoration="underline"
                    >
                      Contact Us
                    </Link>
                  </Text>
                </Center>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
