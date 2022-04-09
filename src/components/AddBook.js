import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = ({ id }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const book = { id, title, author };
        dispatch(addBook(book));
        setTitle('');
        setAuthor('');
      }}
    >
      <h3>ADD NEW BOOK</h3>
      <input
        type="text"
        placeholder="Book Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <input
        type="text"
        placeholder="Book Author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
AddBook.propTypes = {
  id: PropTypes.number.isRequired,
};
export default AddBook;
