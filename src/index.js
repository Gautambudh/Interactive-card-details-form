import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store'
import './index.css';
import App from './Components/App';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById('root'));

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#000",
    },
    h2: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#000",
    },
    h3: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#000",
    },
    h4: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#000",
      fontWeight: "800",
    },
    h5: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#000",
    },
    h6: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#000",
    },
    subtitle1: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#5D5D5D",
    },
    subtitle2: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "hsl(278, 68%, 11%)",
    },
    body1: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#C2B9B0",
    },
    body2: {
      fontFamily: 'Space Grotesk, sans-serif',
    },
    button: {
      fontFamily: 'Space Grotesk, sans-serif',
    },
    caption: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: "#000",
    },
    overline: {
      fontFamily: 'Space Grotesk, sans-serif',
    },
  },
});
theme = responsiveFontSizes(theme);

root.render(
  <React.StrictMode>
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </Provider>
  </React.StrictMode>
);
