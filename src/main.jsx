import React from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDom from 'react-dom/client';
import './index.css'


const entryPoint = document.getElementById("root");
ReactDom.createRoot(entryPoint).render(React.createElement(App))


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <App />
//   </StrictMode>,
// )
