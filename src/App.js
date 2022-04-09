import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import { booksLoad } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booksLoad());
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
};

export default App;
