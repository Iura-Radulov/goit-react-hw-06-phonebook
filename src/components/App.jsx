import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { getContacts } from 'redux/contactSelectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
