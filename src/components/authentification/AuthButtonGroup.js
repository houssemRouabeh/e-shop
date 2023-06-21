import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { GoogleIcon } from '../../assets/icons/AuthProviderIcons';
import { FaFacebook } from 'react-icons/fa';

const googleProvider = { name: 'Google', icon: <GoogleIcon boxSize="5" /> };
const facebookProvider = {
  name: 'Facebook',
  icon: <FaFacebook boxSize="5" color="#3b5998" />,
};

export const AuthButtonGroup = props => (
  <ButtonGroup spacing="4" width="full">
    <Button
      key={googleProvider.name}
      width="full"
      variant={'outline'}
      onClick={props.google}
    >
      <Text mr={'15px'} fontSize={14}>
        Sign in with {googleProvider.name}{' '}
      </Text>{' '}
      {googleProvider.icon}
    </Button>
    <Button key={facebookProvider.name} width="full" variant={'outline'}>
      <Text mr={'15px'} fontSize={14}>
        Sign in with {facebookProvider.name}{' '}
      </Text>{' '}
      {facebookProvider.icon}
    </Button>
  </ButtonGroup>
);
