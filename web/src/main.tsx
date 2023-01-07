import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import light from './styles/themes/light';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from './styles/GlobalStyled';
import { GlobalProvider } from './context/GlobalContext';
import { AuthProvider } from './context/AuthContext';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <ThemeProvider theme={light}>

      <AuthProvider>
        <GlobalProvider>
          <GlobalStyled />
          <App />
        </GlobalProvider>
      </AuthProvider>
      
    </ThemeProvider>

  </React.StrictMode>
)
