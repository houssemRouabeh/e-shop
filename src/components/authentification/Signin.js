import Navbar from '../navbar/Navbar';
import {
  Heading,
  Divider,
  Text,
  HStack,
  ButtonGroup,
  Button,
  Flex,
  useToast,
  textDecoration,
  Box,
  useSafeLayoutEffect,
} from '@chakra-ui/react';

import { Form, Formik } from 'formik';

import { Link, NavLink } from 'react-router-dom';
import CustomPasswordInput from '../inputForms/customInputs/CustomPasswordInput';
import CustomSimpleInput from '../inputForms/customInputs/CustomSimpleInput';
import { googleSignup } from '../../services/usersSignupServices';
import { auth, googleProvider } from '../../config/firebase';
import { AuthButtonGroup } from './AuthButtonGroup';
import CustomCheckboxInput from '../inputForms/customInputs/CustomCheckboxInput';
import { signinFormSchema } from '../formSchemas/signupFormSchema';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';

const Signin = () => {
  const handlegoogleSignup = async () => {
    await googleSignup(auth, googleProvider)
      .then(response => {
        console.log('ok');
      })
      .catch(error => {
        console.log('error');
      });
  };
  const initialValues = {
    email: '',
    password: '',
    validationCheckBox: false,
  };

  const handleSubmit = async values => {
    console.log(values);
    const signin = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )
      .then(result => {
        console.log(result);
        if (values.validationCheckBox) {
          // Remember the user
          localStorage.setItem(
            'idToken',
            JSON.stringify(result._tokenResponse.idToken)
          );
          localStorage.setItem('loggedIn', true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={500}
        p={6}
        m="10px auto"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signinFormSchema}
        >
          {({ values, setValues }) => {
            return (
              <Form>
                <Heading
                  w="100%"
                  textAlign={'center'}
                  fontWeight="normal"
                  mb="2%"
                >
                  User Login
                </Heading>
                <CustomSimpleInput
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                />
                <CustomPasswordInput
                  label="Password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                />

                <ButtonGroup mt="10%" w="100%">
                  <Flex w="100%" justifyContent="space-around">
                    <CustomCheckboxInput
                      name="validationCheckBox"
                      label="Remember me"
                      colorS={'purple'}
                      sizeFont={16}
                      weight={600}
                    />
                  </Flex>
                </ButtonGroup>
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'xl'}
                  width={'full'}
                  fontWeight={600}
                  mt={5}
                  color={'white'}
                  bg={'purple.400'}
                  _hover={{
                    bg: 'purple.300',
                  }}
                  type="submit"
                >
                  Signin
                </Button>
                <HStack mt={'5%'} mb={'5%'}>
                  <Divider />
                  <Text
                    fontSize="m"
                    whiteSpace="nowrap"
                    color="gray.400"
                    fontWeight={600}
                  >
                    Or continue with
                  </Text>
                  <Divider />
                </HStack>
                <AuthButtonGroup google={handlegoogleSignup} />
              </Form>
            );
          }}
        </Formik>
      </Box>
    </>
  );
};

export default Signin;
