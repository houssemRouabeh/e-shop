import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import WithSubnavigation from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import { UserProvider } from './context/UserContext';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <UserProvider value={{ isConnected, setIsConnected }}>
          <Routing />
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
