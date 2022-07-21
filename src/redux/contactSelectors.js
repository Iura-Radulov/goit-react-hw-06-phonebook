// using createReducer
export const getContacts = state => state.items;
export const getFilter = state => state.filter;

export const getVisibleNames = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

// using createSlice
// export const getContacts = state => state.contact.value;
// export const getFilter = state => state.filter.value;
// console.log(getContacts);

// export const getVisibleNames = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   console.log(contacts);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
// };
