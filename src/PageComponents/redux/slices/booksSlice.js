import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  count: 0,
  hasLoader: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const existingBook = state.books.find(book => book.id === id);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
      }
    },
    setCount: (state) =>{
      state.count = state.books.length;
    },
    setHasLoader: (state) => {
      state.hasLoader = !state.hasLoader;
    }
  },
});

export const { addBook, removeBook, updateBook, setCount , setHasLoader} = booksSlice.actions;

export default booksSlice.reducer;
