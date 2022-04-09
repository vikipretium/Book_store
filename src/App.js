import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { booksLoad } from './Redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booksLoad());
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
