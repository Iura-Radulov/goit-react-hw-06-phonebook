import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contactSelectors';
import { changeFilter } from 'redux/contactActions';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </>
  );
};

export default Filter;
