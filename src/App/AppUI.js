import { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyToDo } from '../EmptyToDo';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoError } from '../ToDoError';
import { ToDoItem } from '../ToDoItem';
import { ToDoList } from '../ToDoLIst';
import { ToDoLoading } from '../ToDoLoading';
import { ToDoSearch } from '../ToDoSearch';
import { Modal } from '../Modal/Modal';
import { ToDoForm } from '../ToDoForm';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    handleComplete,
    handleDelete,
    openModal,
    setOpenModal,
  } = useContext(ToDoContext);

  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {loading && <ToDoLoading />}
        {error && <ToDoError />}
        {!loading && searchedTodos.length === 0 && <EmptyToDo />}

        {searchedTodos &&
          searchedTodos.map((todo, index) => (
            <ToDoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => handleComplete(todo)}
              onDelete={() => handleDelete(todo)}
            />
          ))}
      </ToDoList>
      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && <Modal>
        <ToDoForm />
      </Modal>}
    </>
  );
}

export { AppUI };
