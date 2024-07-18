import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ToDoContext = createContext();

function ToDoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleComplete = (todo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t.text === todo.text);
    newTodos[index].completed = !todo.completed;

    saveTodos(newTodos);
  };

  const handleDelete = (todo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t.text === todo.text);
    newTodos.splice(index, 1);

    saveTodos(newTodos);
  };

  const addToDo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    })

    saveTodos(newTodos);
  };

  return (
    <ToDoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        handleComplete,
        handleDelete,
        todos,
        saveTodos,
        totalTodos,
        openModal,
        setOpenModal,
        addToDo
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

// const defaultToDos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));

export { ToDoContext, ToDoProvider };
