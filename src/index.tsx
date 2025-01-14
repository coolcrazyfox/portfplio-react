import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {MouseContextProvider} from "./context/MouseContext";


ReactDOM.render(
  <React.StrictMode>
      <MouseContextProvider>
          <App />
      </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



