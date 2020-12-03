import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryProvider } from './conexts/query.context';
import { VideoProvider } from './conexts/video-state.context';

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
