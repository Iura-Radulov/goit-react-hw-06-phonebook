import { configureStore } from '@reduxjs/toolkit';
import { items, filter } from './contactReducers';

const store = configureStore({
  reducer: {
    items,
    filter,
  },
});

export default store;
