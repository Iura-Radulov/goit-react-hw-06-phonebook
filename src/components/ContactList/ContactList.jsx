import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleNames } from 'redux/contactSelectors';
import s from './ContactList.module.css';
import { deleteContact } from 'redux/contactActions';

const ContactList = () => {
  const visibleNames = useSelector(getVisibleNames);
  const dispatch = useDispatch();

  return (
    <div>
      {visibleNames.map(({ id, number, name }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button className={s.deleteBtn} onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default ContactList;
