import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useField } from 'formik';
import { useState } from 'react';

const CustomPasswordInput = ({ label, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [field, meta] = useField(props);
  console.log('field', field);
  console.log(meta.error);
  return (
    <>
      <FormControl isInvalid={meta.error}>
        <FormLabel htmlFor={props.name} fontWeight={'normal'} mt="5%">
          {label}
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            {...props}
            {...field}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        {meta.touched && meta.error && (
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default CustomPasswordInput;
