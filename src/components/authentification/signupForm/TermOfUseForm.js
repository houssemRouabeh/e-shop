import {
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Text,
  Stack,
  Checkbox,
  Button,
  ButtonGroup,
  useToast,
  Textarea,
  Box,
  Center,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import CustomSimpleInput from '../../inputForms/customInputs/CustomSimpleInput';
import {
  adressDetailsFormSchema,
  termsOfServiceFormScema,
} from '../../formSchemas/signupFormSchema';
import CustomCheckboxInput from '../../inputForms/customInputs/CustomCheckboxInput';

const TermOfUseForm = props => {
  const toast = useToast();

  const handleRegister = () => {
    props.register();
  };
  return (
    <>
      <Formik
        initialValues={props.data}
        onSubmit={() => {
          handleRegister();
        }}
        validationSchema={termsOfServiceFormScema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          isSubmitting,
        }) => {
          return (
            <Form>
              <Heading w="100%" textAlign={'center'} fontWeight="normal">
                Term of Service
              </Heading>

              <Box
                maxHeight={'300px'}
                overflow={'scroll'}
                padding={'10px'}
                mt={'5%'}
              >
                <Center>
                  <Heading size={'xs'}>
                    Website Terms and Conditions of Use
                  </Heading>
                </Center>

                <h2>1. Terms</h2>

                <p>
                  By accessing this Website, accessible from www.bookstore.com,
                  you are agreeing to be bound by these Website Terms and
                  Conditions of Use and agree that you are responsible for the
                  agreement with any applicable local laws. If you disagree with
                  any of these terms, you are prohibited from accessing this
                  site. The materials contained in this Website are protected by
                  copyright and trade mark law.
                </p>

                <h2>2. Use License</h2>

                <p>
                  Permission is granted to temporarily download one copy of the
                  materials on BookStore's Website for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a
                  transfer of title, and under this license you may not:
                </p>

                <ul>
                  <li>modify or copy the materials;</li>
                  <li>
                    use the materials for any commercial purpose or for any
                    public display;
                  </li>
                  <li>
                    attempt to reverse engineer any software contained on
                    BookStore's Website;
                  </li>
                  <li>
                    remove any copyright or other proprietary notations from the
                    materials; or
                  </li>
                  <li>
                    transferring the materials to another person or "mirror" the
                    materials on any other server.
                  </li>
                </ul>

                <p>
                  This will let BookStore to terminate upon violations of any of
                  these restrictions. Upon termination, your viewing right will
                  also be terminated and you should destroy any downloaded
                  materials in your possession whether it is printed or
                  electronic format. These Terms of Service has been created
                  with the help of the{' '}
                  <a href="https://www.termsofservicegenerator.net">
                    Terms Of Service Generator
                  </a>
                  .
                </p>

                <h2>3. Disclaimer</h2>

                <p>
                  All the materials on BookStore's Website are provided "as is".
                  BookStore makes no warranties, may it be expressed or implied,
                  therefore negates all other warranties. Furthermore, BookStore
                  does not make any representations concerning the accuracy or
                  reliability of the use of the materials on its Website or
                  otherwise relating to such materials or any sites linked to
                  this Website.
                </p>

                <h2>4. Limitations</h2>

                <p>
                  BookStore or its suppliers will not be hold accountable for
                  any damages that will arise with the use or inability to use
                  the materials on BookStore's Website, even if BookStore or an
                  authorize representative of this Website has been notified,
                  orally or written, of the possibility of such damage. Some
                  jurisdiction does not allow limitations on implied warranties
                  or limitations of liability for incidental damages, these
                  limitations may not apply to you.
                </p>

                <h2>5. Revisions and Errata</h2>

                <p>
                  The materials appearing on BookStore's Website may include
                  technical, typographical, or photographic errors. BookStore
                  will not promise that any of the materials in this Website are
                  accurate, complete, or current. BookStore may change the
                  materials contained on its Website at any time without notice.
                  BookStore does not make any commitment to update the
                  materials.
                </p>

                <h2>6. Links</h2>

                <p>
                  BookStore has not reviewed all of the sites linked to its
                  Website and is not responsible for the contents of any such
                  linked site. The presence of any link does not imply
                  endorsement by BookStore of the site. The use of any linked
                  website is at the user's own risk.
                </p>

                <h2>7. Site Terms of Use Modifications</h2>

                <p>
                  BookStore may revise these Terms of Use for its Website at any
                  time without prior notice. By using this Website, you are
                  agreeing to be bound by the current version of these Terms and
                  Conditions of Use.
                </p>

                <h2>8. Your Privacy</h2>

                <p>Please read our Privacy Policy.</p>

                <h2>9. Governing Law</h2>

                <p>
                  Any claim related to BookStore's Website shall be governed by
                  the laws of us without regards to its conflict of law
                  provisions.
                </p>
              </Box>

              <Flex mt={'5%'}>
                <CustomCheckboxInput
                  label="By clicking Register, you agree on our terms and conditions"
                  name="validationCheckBox"
                />
              </Flex>
              <ButtonGroup mt="10%" w="100%">
                <Flex w="100%" justifyContent="space-around">
                  <Flex>
                    <Button
                      colorScheme="purple"
                      variant="solid"
                      w="7rem"
                      mr="5%"
                      onClick={() => props.prev(values)}
                    >
                      Back
                    </Button>
                    <Button
                      w="7rem"
                      colorScheme="purple"
                      variant="outline"
                      type="button"
                      isDisabled
                    >
                      Next
                    </Button>
                  </Flex>

                  <Button
                    w="7rem"
                    colorScheme="red"
                    variant="solid"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Register
                  </Button>
                </Flex>
              </ButtonGroup>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default TermOfUseForm;
