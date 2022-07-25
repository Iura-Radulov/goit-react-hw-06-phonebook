import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export const App = () => {
  return (
    <div className="container">
      <h2 className="title">Phonebook</h2>
      <ContactForm />
      <div>
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
