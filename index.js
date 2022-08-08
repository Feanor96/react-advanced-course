import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// const root = createRoot(document.getElementById('root'));
// ReactDOM.render(App);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// import {StrictMode} from 'react';

// // ✅ now importing from react-dom/client
// import {createRoot} from 'react-dom/client';

// import App from './App';

// // 👇️ IMPORTANT: make sure to specify correct ID
// // must be the ID of the div element in your index.html file
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
