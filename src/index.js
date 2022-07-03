import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './routes/Home';
import QuotesPage from './routes/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="quotes" element={<QuotesPage />} />
      <Route path="maths" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
