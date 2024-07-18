import './ToDoItem.css';
import { CompleteIcon } from '../ToDoIcon/CompleteIcon';
import { DeleteIcon } from '../ToDoIcon/DeleteIcon';

function ToDoItem(props) {
  return (
    <li className='TodoItem'>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon onClick={props.onDelete} onDelete={props.onDelete} />
    </li>
  );
}

export { ToDoItem };
