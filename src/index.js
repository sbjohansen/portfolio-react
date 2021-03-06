import {createRoot} from 'react-dom/client';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './styles/custom.scss';
import './styles/normalize.scss';
import './styles/global.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
