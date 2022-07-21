import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contactActions';
import { changeFilter } from './contactActions';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialValue = () => JSON.parse(localStorage.getItem('contacts')) ?? contactList;

export const items = createReducer(initialValue(), {
  [addContact]: (state, { payload }) => {
    if (state.find(contact => contact.name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
