import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useAuth } from "./useAuth";
import { updateTask, deleteTask, createTask } from './services/taskApi'

function useTodos() {
  const { user, isLogged, login, logout, signUp, token } = useAuth()
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [], {user, isLogged, token})

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)
  const [modalContent, setModalContent] = React.useState(false)
  const [alert, setAlert] = React.useState(null)
  
  const completedTodos = todos.filter(todo => !!todo.isCompleted).length 
  const totalTodos = todos.length
  
  let searchedTodos = []
  
  if (!searchValue.length >= 1) {
    searchedTodos = todos
    
  } else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.description.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  
  const completeTodoSwitch = async (id) => {
      const todoIndex = todos.findIndex(todo => todo._id === id)
      const newTodos = [...todos]
      if(!newTodos[todoIndex].isCompleted) {
        newTodos[todoIndex].isCompleted = true
      } else {
        newTodos[todoIndex].isCompleted = false
      }
      saveTodos(newTodos)
      if(isLogged) {
        await updateTask(id, newTodos[todoIndex].isCompleted, token)
      }
  }
  
  const addTodo = async (description) => {
    let _id = Date.now()
    if(isLogged) {
      const res = await createTask(user._id, description, token)
      _id = res._id
    }
    const newTodos = [...todos]
    newTodos.push({
      isCompleted: false,
      description,
      _id,
    })
    saveTodos(newTodos)
  }
  
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo._id === id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
    if(isLogged) {
      deleteTask(id, token)
    }
  }
  

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    modalContent,
    alert,
    user,
    token,
    isLogged,
  }

  const stateUpdaters = {
    setSearchValue,
    addTodo,
    completeTodoSwitch,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
    setModalContent,
    setAlert,
    login,
    logout,
    signUp,
  }

  return { states, stateUpdaters }
}
export { useTodos }