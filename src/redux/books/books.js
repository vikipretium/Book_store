const ADD_BOOK = 'Book_store/books/ADD_BOOK';
const REMOVE_BOOK = 'Book_store/books/REMOVE_BOOK';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: action.payload };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
export default booksReducer;
