import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './variables.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Add <div id="root"></div> to your HTML file.');
}

createRoot(rootElement).render(<App />);
