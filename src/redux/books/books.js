import { saveBook, loadBooks, removeBook } from '../apiFunctions';

const ADD_BOOK = 'Book_store/books/ADD_BOOK';
const REMOVE_BOOK = 'Book_store/books/REMOVE_BOOK';
const BOOK_ADDED = 'Book_store/Books/BOOK_ADDED';
const BOOK_REMOVED = 'Book_store/Books/BOOK_REMOVED';
const LOAD_BOOKS = 'Book_store/Books/LOAD_BOOKS';
const BOOKS_LOADED = 'Book_store/Books/BOOKS_LOADED';

export const addBook = (book) => (dispatch) => {
  dispatch({ type: ADD_BOOK });
  saveBook(book).then((status) => {
    if (status === 201 || status === 200) {
      dispatch({ type: BOOK_ADDED, payload: book });
    }
  });
};

export const booksLoad = () => (dispatch) => {
  dispatch({ type: LOAD_BOOKS });
  loadBooks().then((books) => dispatch({
    type: BOOKS_LOADED,
    payload: books,
  }));
};

export const bookRemove = (index, id) => (dispatch) => {
  dispatch({ type: REMOVE_BOOK });
  removeBook(id).then((status) => {
    if (status === 201 || status === 200) dispatch({ type: BOOK_REMOVED, payload: index });
  });
};

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_BOOKS:
    case REMOVE_BOOK:
    case ADD_BOOK:
      return { ...state, waiting: true };
    case BOOK_ADDED:
      return {
        ...state,
        books: [...state.books, action.payload],
        waiting: false,
      };
    case BOOKS_LOADED:
      return { ...state, books: [...state.books, ...action.payload] };
    case BOOK_REMOVED:
      return {
        ...state,
        books: [
          ...state.books.slice(0, action.payload),
          ...state.books.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};
export default booksReducer;
