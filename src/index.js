import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { ContextProvider } from "./Context/DataContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ContextProvider>
      <App />
    </ContextProvider>
    
  </React.StrictMode>
);

