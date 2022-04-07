import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

import { connect } from 'react-redux';
import dispatchToProps from './Redux/dispatchToProps';
import stateToProps from './Redux/stateToProps';

const books = [
  {
    id: 1,
    genre: 'genre',
    title: 'book title',
    author: 'author',
    status: 'complete',
    currentChapter: 'Current chapter',
    chapterNumber: 'Chapter #number',
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Books books={books} />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
export default connect(stateToProps, dispatchToProps)(App);
