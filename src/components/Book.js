import React from 'react';
import Proptypes from 'prop-types';

export default function Book({ book }) {
  return (
    <div className="bookInfo">
      <p className="title">{book.title}</p>
      <p className="author">{book.author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};
