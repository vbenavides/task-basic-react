import { ToDoContext } from '../context/ToDoContext';
import './ToDoSearch.css';
import React, { useContext } from 'react';

function ToDoSearch() {
  const { searchValue, setSearchValue } = useContext(ToDoContext);

  return (
    <input
      placeholder='Cortar cebolla'
      className='ToDoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { ToDoSearch };
