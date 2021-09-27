import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSerach } from './TodoSerach'

let todos = []

function App() {
  return (
    <>
      <TodoCounter/>

      <TodoSerach/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;
