import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { theme } from './theme/Theme';
import { auth } from './firebase/Firebase'
import { signInAnonymously } from 'firebase/auth';

signInAnonymously(auth);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

