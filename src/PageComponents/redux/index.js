import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import usersReducer from './slices/usersSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  users: usersReducer
});

export default rootReducer;
