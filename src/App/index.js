import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Hacer la tarea de mañana', completed: true },
//   { text: 'Limpiar la casa', completed: false },
//   { text: 'Estudiar', completed: false },
//   { text: 'Ir de compras', completed: false },
// ]

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length //El doble signo de interrogacion es lo mismo que (todo.completed == true)
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos

  } else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase() //De esta manera no separamos la busquedas con mayusculas y minusculas
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos)
  }

  const completeTodoSwitch = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    if(!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true
    } else {
      newTodos[todoIndex].completed = false
    }
    saveTodos(newTodos)
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      deleteTodo={deleteTodo}
      completeTodoSwitch={completeTodoSwitch}
    />
  )
}

export default App;