import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Common/theme"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
);

