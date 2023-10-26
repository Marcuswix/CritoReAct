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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/News' element={<News />} />
        <Route path='/NewsArticles' element={<NewsArticles />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);