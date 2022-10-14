import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        isCompleted={props.isCompleted}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${props.isCompleted && 'TodoItem-p--complete'}`}>
        {props.description}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };