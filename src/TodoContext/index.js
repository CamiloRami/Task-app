import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)
  
  const completedTodos = todos.filter(todo => !!todo.completed).length //El doble signo de interrogacion es lo mismo que (todo.completed === true)
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
  
    const addTodo = (text) => {
      const newTodos = [...todos]
      newTodos.push({
        completed: false,
        text: text,
      })
      saveTodos(newTodos)
    }
    
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text)
      const newTodos = [...todos]
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
    }
    
    return (
      <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        deleteTodo,
        addTodo,
        completeTodoSwitch,
        openModal,
        setOpenModal,
      }}>
          {props.children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider }