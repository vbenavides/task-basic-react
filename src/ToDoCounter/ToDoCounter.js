import { useContext } from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '../context/ToDoContext';

function ToDoCounter() {
  const { completedTodos, totalTodos } = useContext(ToDoContext);

  return (
    <h1 className='ToDoCounter'>
      Has completado<span>{completedTodos}</span> de <span>{totalTodos}</span>{' '}
      TODOs
    </h1>
  );
}

export { ToDoCounter };
