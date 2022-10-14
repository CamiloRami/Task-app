import React from "react"
import { getUserTasks } from './services/taskApi'

function useLocalStorage(itemName, initialValue, {user, isLogged, token}) {
  const tasksFromApi = React.useRef(null)
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))
  const {
    sincronizedItem,
    error,
    loading,
    item,
  } = state

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item })
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
  const onSincronize = () => dispatch({ type: actionTypes.sincronize})

  React.useEffect(() => {
    async function setTodos() {
      console.log('here')
      try {
        if (!isLogged) {  
          const localStorageItem = localStorage.getItem(itemName)
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            onSuccess(initialValue)
          } else {
            onSuccess(JSON.parse(localStorageItem))
          }     
        } else {
            const tasks = await getUserTasks(user._id ,token)
            tasksFromApi.current = tasks
            onSuccess(tasks)
          }
        } catch(error) {
        onError(error)
      }
    }
    setTodos()
  }, [sincronizedItem, isLogged, token, user])
  
  const saveItem = (newItem) => {
    try { 
      if(!isLogged) {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
      }
      onSave(newItem)
    } catch(error) {
      onError(error)
    }
  }
  
  const sincronizeItem = () => {
    onSincronize()
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  }
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: false,
  item: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}
  
export { useLocalStorage }