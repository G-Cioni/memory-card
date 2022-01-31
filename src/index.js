import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  appBgColor: '#476C9B',
  borderRadius: '.5em',
  boxShadow: '1px 1px 5px black',
  cardBgColor: '#ADD9F4',
  fontColor: '#101419',
  fontFamily: 'sans-serif',
  secondaryColor: '#984447',
};

const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.appBgColor}
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
