import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ author, title, bookIndex }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <button
        book-index={bookIndex}
        onClick={(e) => {
          const index = Number(e.target.getAttribute('book-index'));
          dispatch(removeBook(index));
        }}
        type="button"
      >
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  author: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  bookIndex: Proptypes.number.isRequired,
};
export default Book;
