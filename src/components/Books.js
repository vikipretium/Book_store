import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import './Books.css';

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books, shallowEqual);
  const id = books.length ? books[books.length - 1].id + 1 : books.length + 1;
  return (
    <>
      {!books.length ? (
        <p className="empty-books-msg">there are no books added yet.</p>
      ) : (
        books.map((book, i) => (
          <Book
            key={book.id}
            bookIndex={i}
            bookId={book.id}
            title={book.title}
            author={book.author}
            category={book.type}
          />
        ))
      )}
      <AddBook id={id} />
    </>
  );
};

export default Books;
