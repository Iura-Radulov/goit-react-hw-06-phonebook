import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './contactSlice';

// ------using createReducer --------
// import { items, filter } from './contactReducers';

// using createReducer
// const store = configureStore({
//   reducer: {
//     items,
//     filter,
//   },
// });

// --------- using createSlice -----------
const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  },
});

export default store;
