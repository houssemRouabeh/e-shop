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
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import CustomSimpleInput from '../../inputForms/customInputs/CustomSimpleInput';
import { adressDetailsFormSchema } from '../../formSchemas/signupFormSchema';

const AdressDetailsForm = props => {
  const toast = useToast();
  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={adressDetailsFormSchema}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => {
          return (
            <Form>
              <Heading w="100%" textAlign={'center'} fontWeight="normal">
                Adress Details
              </Heading>

              <CustomSimpleInput
                label="Address"
                type="text"
                name="adress"
                id="adress"
                placeholder="Enter Adress"
              />

              <Flex mt={'5%'}>
                <CustomSimpleInput
                  label="City"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City"
                />
              </Flex>
              <Flex mt={'5%'}>
                <CustomSimpleInput
                  label="ZIP / Postal"
                  type="number"
                  name="zipCode"
                  id="zipCode"
                  placeholder="Enter Postal Code"
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
                      onClick={handleSubmit}
                    >
                      Next
                    </Button>
                  </Flex>
                </Flex>
              </ButtonGroup>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default AdressDetailsForm;
