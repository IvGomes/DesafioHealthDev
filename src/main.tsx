import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ThemeProvider } from 'styled-components';
import GlobalStyled from './styles/GlobalStyled';
import light from './styles/themes/light';
import { GlobalProvider } from './context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalProvider>
        <GlobalStyled />
        <App />
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>
)
