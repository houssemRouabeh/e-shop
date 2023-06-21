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
} from '@chakra-ui/react';

import { Form, Formik } from 'formik';

import CustomSimpleInput from '../../inputForms/customInputs/CustomSimpleInput';
import { userRegistrationFormSchema } from '../../formSchemas/signupFormSchema';
import CustomPasswordInput from '../../inputForms/customInputs/CustomPasswordInput';
import { emailExistVerif } from '../../../services/usersSignupServices';
import { Link } from 'react-router-dom';

export default function UserRegistrationForm(props) {
  const toast = useToast();
  const handleSubmit = async values => {
    const verifEmail = await emailExistVerif(values.email);

    verifEmail
      ? toast({
          title: 'The mail you entred is already exist',
          description: 'Go to Signin page to login',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      : props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={userRegistrationFormSchema}
    >
      {({ handleSubmit, handleChange, handleBlur, values }) => {
        return (
          <Form>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              User Registration
            </Heading>
            <CustomSimpleInput
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <CustomPasswordInput
              label="Password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
            <CustomPasswordInput
              id="passwordConfirm"
              placeholder="Enter password"
              name="passwordConfirm"
            />

            <ButtonGroup mt="10%" w="100%">
              <Flex w="100%" justifyContent="space-around">
                <Flex>
                  <Button
                    colorScheme="purple"
                    variant="solid"
                    w="7rem"
                    mr="5%"
                    isDisabled
                  >
                    Back
                  </Button>
                  <Button
                    w="7rem"
                    colorScheme="purple"
                    variant="outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Next
                  </Button>
                </Flex>
              </Flex>
            </ButtonGroup>
            <HStack mt={'5%'} mb={'5%'}>
              <Divider />
              <Text
                fontSize="m"
                whiteSpace="nowrap"
                color="blue.600"
                fontWeight={600}
                _hover={{ textDecoration: 'underline' }}
              >
                <Link to={'/signin'}>Already a user? Login</Link>
              </Text>
              <Divider />
            </HStack>
          </Form>
        );
      }}
    </Formik>
  );
}
