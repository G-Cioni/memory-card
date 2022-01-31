import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  richBlack: '#101419',
  steelTeal: '#468c98',
  queenBlue: '#476C9B',
  uranianBlue: '#ADD9F4',
  cordovan: '#984447',
  fontFamily: 'sans-serif',
  borderRadius: '.5em',
  boxShadow: '1px 1px 5px black',
};

const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.queenBlue}
}`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
