import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemove } from '../redux/books/books';

const Book = ({
  author, title, bookIndex, category, bookId,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{title}</p>
      <p>{category}</p>
      <p>{author}</p>
      <button
        book-index={bookIndex}
        onClick={(e) => {
          const index = Number(e.target.getAttribute('book-index'));
          dispatch(bookRemove(index, bookId));
        }}
        type="button"
      >
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bookIndex: PropTypes.number.isRequired,
  bookId: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
