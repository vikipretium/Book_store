import React from 'react';

export default function AddBook() {
  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
