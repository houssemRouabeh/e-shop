import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import WithSubnavigation from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Routing />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
