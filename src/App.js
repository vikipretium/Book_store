import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

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

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Books books={books} />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default connect(App);
