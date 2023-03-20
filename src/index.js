import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
=======
import GlobalStyle from './style/GlobalStyle';
import ResetStyle from './style/ResetStyle';
>>>>>>> 88d6ab714f6fec2205be32c297cf78b37c045b4f

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
    <React.StrictMode>
        <ResetStyle />
        <GlobalStyle />
        <App />
    </React.StrictMode>
>>>>>>> 88d6ab714f6fec2205be32c297cf78b37c045b4f
);