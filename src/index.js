import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './constants/routes';
import Billing from './Pages/Billing'
import CMF from './Pages/CMF';
import Stock from './Pages/Stock';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route element={<App/>} path='/'></Route>
    <Route element={<Billing/>} path={routes.Billing}></Route>
    <Route element={<Stock/>} path={routes.Stock}></Route>
    <Route element={<CMF/>} path={routes.cmf}></Route>
  </Routes>
  </BrowserRouter>

);
reportWebVitals();
