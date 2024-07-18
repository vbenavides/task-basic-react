import React from 'react';

import './ToDoForm.css';
import { ToDoContext } from '../context/ToDoContext';

function ToDoForm() {
  const { addToDo, setOpenModal } = React.useContext(ToDoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Esribe tu nuevo TODO</label>
      <textarea
        placeholder='Cortar cebolla para el almuerzo'
        value={newTodoValue}
        onChange={onChange}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>
          Añadir
        </button>
      </div>
    </form>
  );
}
export { ToDoForm };
