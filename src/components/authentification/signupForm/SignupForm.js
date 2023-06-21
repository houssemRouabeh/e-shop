import React, { useState } from 'react';

import { Progress, Box, useToast } from '@chakra-ui/react';

import UserDetailsForm from './UserDetailsForm';
import AdressDetailsForm from './AdressDetailsForm';
import UserRegistrationForm from './UserRegistrationForm';

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth, googleProvider } from '../../../config/firebase';
import {
  addDataWithCustomizedId,
  googleSignup,
} from '../../../services/usersSignupServices';
import TermOfUseForm from './TermOfUseForm';
import { Navigate, useNavigate } from 'react-router-dom';

export default function SignupForm() {
  //initial signup form data
  const [data, setData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthdate: '',
    country: '',
    indicatifCode: '',
    phoneNumber: '',
    adress: '',
    city: '',
    zipCode: '',
    validationCheckBox: false,
  });
  const [indicatif, setIndicatif] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(25);

  //handle next step form function
  const handleNextStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    {
      indicatif && setData(prev => ({ ...prev, indicatifCode: indicatif }));
    }
    setCurrentStep(prev => prev + 1);
    setProgress(progress => progress + 25);
  };

  //handle previous step form function
  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
    setProgress(progress => progress - 25);
  };

  //handle update indicatif code data
  const handlePhoneIndicatif = phoneCode => {
    setIndicatif(phoneCode);
  };

  //Save all form function
  const handleSaveForm = newData => {
    setData(prev => ({ ...prev, ...newData }));
    console.log('save form', data);
  };
  //register user function
  const handleRegister = async () => {
    console.log('register', data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(result => {
        const userDetails = {
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
          birthdate: data.birthdate,
          country: data.country,
          indicatifCode: data.indicatifCode,
          phoneNumber: data.phoneNumber,
          adress: data.adress,
          city: data.city,
          zipCode: data.zipCode,
        };

        addDataWithCustomizedId(result.user.uid, userDetails);

        console.log(auth.currentUser);
        sendEmailVerification(auth.currentUser);
        navigate('/mail-validation');
        toast({
          title: 'Account created.',
          description: 'Your Account is successfuly created.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(error => {
        const errors = JSON.parse(JSON.stringify(error));
        console.log(errors);
        toast({
          title: errors.code,
          description: 'Please make sure of the email you have entred.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const steps = [
    <UserRegistrationForm next={handleNextStep} data={data} />,
    <UserDetailsForm
      next={handleNextStep}
      prev={handlePrevStep}
      phoneIndicatif={handlePhoneIndicatif}
      indicatifValue={indicatif}
      data={data}
    />,
    <AdressDetailsForm
      next={handleNextStep}
      prev={handlePrevStep}
      save={handleSaveForm}
      data={data}
    />,
    <TermOfUseForm
      data={data}
      register={handleRegister}
      prev={handlePrevStep}
    />,
  ];

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={500}
        p={6}
        m="10px auto"
      >
        <Progress
          colorScheme="purple"
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {steps[currentStep]}
      </Box>
    </>
  );
}
