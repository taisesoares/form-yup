import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Reset from './styles/Reset';
import Body from './components/Body'

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Body>
      <App />
    </Body>
  </React.StrictMode>,
  document.getElementById('root')
);
