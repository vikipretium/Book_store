import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
