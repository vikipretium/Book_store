const ADD_BOOK = 'Book_store/books/ADD_BOOK';
const REMOVE_BOOK = 'Book_store/books/REMOVE_BOOK';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

const initialState = {
  books: [
    {
      id: 1,
      title: 'book1',
      author: 'author1',
    },
    {
      id: 2,
      title: 'book2',
      author: 'author2',
    },
    {
      id: 3,
      title: 'book3',
      author: 'author3',
    },
    {
      id: 4,
      title: 'book4',
      author: 'author4',
    },
  ],
};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
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
