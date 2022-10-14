import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal, setModalContent }) {
  const onClickButton = () => {
    setOpenModal(!openModal)
    setModalContent('TodoForm')
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };