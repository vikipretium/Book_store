import React from 'react';
import Proptypes from 'prop-types';

export default function Book({ book }) {
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};
