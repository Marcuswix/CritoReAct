import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import News from './views/News';
import Article from './views/Articles';
import Login from './views/Login';
import Services from './views/Services'
import ScrollToTop from './components/ScrollToTop';
import UnderConstruction from './views/UnderConstruction';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/News' element={<News />} />
        <Route path='/Articles/:id' element={<Article />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/UnderConstruction' element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);