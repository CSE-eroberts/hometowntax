import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './Layout';
import './index.css';
import Home from './pages/Home';
import FAQ from './pages/FAQ';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="FAQ" element={<FAQ />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);