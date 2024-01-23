import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import ProdutoProvider from './contexts/ProdutoContexto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProdutoProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProdutoProvider>
);
