import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from '@chakra-ui/react';
import { useField } from 'formik';

const CustomCheckboxInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormControl
        mt="2%"
        isInvalid={meta.error && meta.touched}
        mr={props.custommargin}
      >
        <Checkbox {...props} {...field} colorScheme={props.colorS}>
          <Text fontSize={props.sizeFont} fontWeight={props.weight}>
            {props.label}{' '}
          </Text>
        </Checkbox>

        {meta.touched && meta.error && (
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default CustomCheckboxInput;
