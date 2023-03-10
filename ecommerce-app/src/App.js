// Lib
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Client
import Layout from './layouts/client/Layout';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<Product />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
