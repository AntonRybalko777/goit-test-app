import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const theme = {
  color: {
    active: '#BDBDBD',
    blue: '#3470ff',
    blueHover: '#0b44cd',
    gray: 'rgba(18, 20, 23, 0.5)',
  },
  transition: '250ms ease-in',
  border: '1px solid rgba(18, 20, 23, 0.1)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
