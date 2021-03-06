import React from "react";
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }
    
  return (
    <form onSubmit={onSubmit}>
      <label>Create a new task</label>
      <textarea
        required
        value={newTodoValue}
        onChange={onChange}
        placeholder='For example: "Do my homework"'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          className='TodoForm-button TodoForm-button-cancel'
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className='TodoForm-button TodoForm-button-add'
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  )
}

export { TodoForm }