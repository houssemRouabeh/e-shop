import * as yup from 'yup';
const passwordRules =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
//8 character, 1 capital letter, 1 number, 1 special character

export const userRegistrationFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        'Password must contain 8 character, capital letter, number and special character !! ',
    })
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't matches")
    .required('Password Confirmation is required'),
});

export const userDetailsFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-Z ]*$/, 'Numbers are not allowed')
    .required('First Name is required'),
  lastName: yup
    .string()
    .matches(/^[a-zA-Z ]*$/, 'Numbers are not allowed')
    .required('Last Name is required'),
  gender: yup.string().oneOf(['Male', 'Female']).required('Gender is required'),
  birthdate: yup
    .date()
    .max(
      new Date(Date.now() - 567648000000),
      'You must be at least 18 years old to register'
    )
    .required('Required'),
  country: yup.string().required('Country is required'),
  phoneNumber: yup.number().required('Phone number is required'),
});
export const adressDetailsFormSchema = yup.object().shape({
  adress: yup.string().required('Adress is required'),
  city: yup.string().required('City is required'),
  zipCode: yup.number().required('Postal Code is required'),
});

export const termsOfServiceFormScema = yup.object().shape({
  validationCheckBox: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service'),
});

export const signinFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});
