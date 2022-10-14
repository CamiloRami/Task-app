import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ isCompleted, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={isCompleted ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };