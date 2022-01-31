import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  appBgColor: '#4059AD',
  borderRadius: '.5em',
  boxShadow: '1px 1px 5px black',
  cardBgColor: '#6B9AC4',
  fontColor: '#FFEA16',
  fontFamily: 'sans-serif',
  secondaryColor: '#650d1b',
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
