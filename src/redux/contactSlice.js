import { createSlice } from '@reduxjs/toolkit';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialValue = () => JSON.parse(localStorage.getItem('contacts')) ?? contactList;

const contactSlice = createSlice({
  name: 'contact',
  initialState: { value: initialValue },
  reducers: {
    addContact(state, { payload }) {
      return [...state, payload];
    },
    deleteContact(state, { payload }) {
      state.filter(({ id }) => id !== payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter({ payload }) {
      return payload;
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
