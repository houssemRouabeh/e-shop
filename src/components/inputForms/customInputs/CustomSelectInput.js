import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useField } from 'formik';

const CustomSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormControl mt="2%" isInvalid={meta.error} mr={props.customMargin}>
        <FormLabel htmlFor={props.name} fontWeight={'normal'}>
          {label}
        </FormLabel>
        <Select {...props} {...field} shadow="sm" w="full" rounded="md" />
        {meta.touched && meta.error && (
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default CustomSelectInput;
