import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";


import './styles/App.scss';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';


function App() {

   return (

      <div className='app'>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
         <Footer />
      </div>

   );
}

export default App;