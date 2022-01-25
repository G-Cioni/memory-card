import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  richBlack: '#101419',
  steelTeal: '#468c98',
  queenBlue: '#476C9B',
  uranianBlue: '#ADD9F4',
  cordovan: '#984447',
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
