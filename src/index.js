import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import News from './views/News';
import NewsArticles from './views/NewsArticles';
import Login from './views/Login';
import Services from './views/Services'
import ScrollToTop from './components/ScrollToTop';

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
        <Route path='/NewsArticles' element={<NewsArticles />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);