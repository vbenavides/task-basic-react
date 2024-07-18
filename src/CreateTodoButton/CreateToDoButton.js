import './CreateToDoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className='CreateToDoButton'
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}
export { CreateTodoButton };
