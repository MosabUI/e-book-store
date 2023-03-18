import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { FilterProvider } from './context/FilterContext';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
       <FilterProvider>
        <ToastContainer position={'top-center'}  
               closeOnClick={ true}
               closeButton={false}
               autoClose={2000}
               pauseOnHover= {true}
               draggable={true}
               theme={'colored'}
               />         
        <App />
       </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
