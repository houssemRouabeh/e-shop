import React, { useState } from 'react';
import { Progress, Box } from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import UserDetailsForm from './UserDetailsForm';
import AdressDetailsForm from './AdressDetailsForm';
import UserRegistrationForm from './UserRegistrationForm';

export default function SignupForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    birthdate: '',
    country: '',
    indicatifCode: '',
    phoneNumber: '',
    adress: '',
    city: '',
    zipCode: '',
  });
  const [indicatif, setIndicatif] = useState('');
  const toast = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(33.33);

  const handleNextStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev + 1);
    setProgress(progress => progress + 33.33);
  };
  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
    setProgress(progress => progress - 33.33);
  };
  const handlePhoneIndicatif = phoneCode => {
    setIndicatif(phoneCode);
    setData({ ...data, indicatifCode: indicatif });
    console.log(data);
  };
  console.log(indicatif);
  const steps = [
    <UserRegistrationForm next={handleNextStep} data={data} />,
    <UserDetailsForm
      next={handleNextStep}
      prev={handlePrevStep}
      phoneIndicatif={handlePhoneIndicatif}
      indicatifValue={indicatif}
      data={data}
    />,
    <AdressDetailsForm prev={handlePrevStep} data={data} />,
  ];
  console.log(data);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={500}
        p={6}
        m="10px auto"
        as="form"
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
