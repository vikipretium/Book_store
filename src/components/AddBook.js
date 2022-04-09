import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './AddBook.css';

const AddBook = ({ id }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const categories = [
    'Action',
    'Adventure',
    'Animation',
    'Crime',
    'Comedy',
    'Documentary',
    'Sci-fi',
  ];
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!type.length) return;
        const book = {
          id,
          title,
          type,
          author,
        };
        dispatch(addBook(book));
        setTitle('');
        setAuthor('');
        setType('');
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
      <select
        value={type.length ? type : 'CATEGORY'}
        onChange={(e) => setType(e.target.value)}
        name="categories"
      >
        <option className="selected" value="CATEGORY" disabled>
          CATEGORY
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};
AddBook.propTypes = {
  id: PropTypes.number.isRequired,
};
export default AddBook;
