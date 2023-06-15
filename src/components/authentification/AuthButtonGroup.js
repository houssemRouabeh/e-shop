import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { GitHubIcon, GoogleIcon } from '../../assets/icons/AuthProviderIcons';

const providers = [
  { name: 'Google', icon: <GoogleIcon boxSize="5" /> },
  { name: 'GitHub', icon: <GitHubIcon boxSize="5" /> },
];

export const AuthButtonGroup = () => (
  <ButtonGroup spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full" variant={'outline'}>
        <Text mr={'15px'} fontSize={14}>
          Sign up with {name}{' '}
        </Text>{' '}
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
