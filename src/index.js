import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryProvider } from './conexts/query.context';

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
