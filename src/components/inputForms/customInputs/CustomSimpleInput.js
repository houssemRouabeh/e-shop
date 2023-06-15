import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useField } from 'formik';

const CustomSimpleInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormControl
        mt="2%"
        isInvalid={meta.error && meta.touched}
        mr={props.custommargin}
      >
        <FormLabel htmlFor={props.name} fontWeight={'normal'}>
          {label}
        </FormLabel>
        <Input {...props} {...field} />
        {meta.touched && meta.error && (
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default CustomSimpleInput;
