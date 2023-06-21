import { useRef, useState } from 'react';
import {
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputLeftAddon,
  InputGroup,
  Button,
  ButtonGroup,
  FormErrorMessage,
  SimpleGrid,
} from '@chakra-ui/react';

import { country } from '../../../data/countryList';
import { Form, Formik } from 'formik';
import CustomSimpleInput from '../../inputForms/customInputs/CustomSimpleInput';
import { userDetailsFormSchema } from '../../formSchemas/signupFormSchema';
import CustomSelectInput from '../../inputForms/customInputs/CustomSelectInput';

const UserDetailsForm = props => {
  const [pays, setPays] = useState('');
  const [indicatif, setIndicatif] = useState('');
  const selectedPays = useRef('');
  const handleSelectCountry = () => {
    const selectedIndicatif = trouverIndicatif(selectedPays.current.value);
    setPays(selectedPays);
    setIndicatif(selectedIndicatif);
    console.log(selectedIndicatif);
    props.phoneIndicatif(selectedIndicatif);
  };
  const trouverIndicatif = pays => {
    const selectedPaysCode = country.find(item => item.name === pays);

    return selectedPaysCode ? selectedPaysCode.code : '';
  };
  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={userDetailsFormSchema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => {
          return (
            <Form>
              <Heading
                w="100%"
                textAlign={'center'}
                fontWeight="normal"
                mb="2%"
              >
                User Details
              </Heading>
              <SimpleGrid columns={2} gap={5} mt={'5%'}>
                <CustomSimpleInput
                  label="First name"
                  id="firstName"
                  placeholder="First name"
                  name="firstName"
                />
                <CustomSimpleInput
                  label={'Last name'}
                  id="lastName"
                  placeholder="Last name"
                  name="lastName"
                />
              </SimpleGrid>
              <SimpleGrid columns={2} gap={5}>
                <CustomSelectInput
                  label={'Gender'}
                  name="gender"
                  id="gender"
                  placeholder="Select Gender"
                  custommargin={5}
                >
                  <option value={'Male'}>Male</option>
                  <option value={'Female'}>Female</option>
                </CustomSelectInput>
                <CustomSimpleInput
                  label="Date of Birth"
                  id="birthdate"
                  type="date"
                  name="birthdate"
                />
              </SimpleGrid>
              <Flex mt={'5%'}>
                <FormControl isInvalid={touched.country && errors.country}>
                  <FormLabel htmlFor="country" fontWeight={'normal'}>
                    Country / Region
                  </FormLabel>
                  <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Select country"
                    shadow="sm"
                    w="full"
                    rounded="md"
                    ref={selectedPays}
                    onChange={e => {
                      handleChange(e);
                      handleSelectCountry();
                    }}
                    onBlur={handleBlur}
                    value={values.country}
                  >
                    {country.map(countrie => (
                      <option key={countrie.code + countrie.name}>
                        {countrie.name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.country}</FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex mt={'5%'}>
                <FormControl
                  as={GridItem}
                  colSpan={[6, 3, null, 2]}
                  isInvalid={touched.phoneNumber && errors.phoneNumber}
                >
                  <FormLabel htmlFor="phone" fontWeight={'normal'}>
                    Phone Number
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon
                      children={
                        props.indicatifValue ? props.indicatifValue : '+000'
                      }
                    />
                    <Input
                      type="tel"
                      placeholder="phone number"
                      shadow="sm"
                      w="full"
                      rounded="md"
                      autoComplete="phone"
                      name="phoneNumber"
                      id="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                </FormControl>
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

export default UserDetailsForm;
