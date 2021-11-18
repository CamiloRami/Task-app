import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { EmptySearchResults } from '../EmptySearchResults'

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodoSwitch,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />

        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => <EmptySearchResults searchText={searchValue}/>}

        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodoSwitch(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodoSwitch(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>      

      {openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
        )
      }

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
  )
}

export default App;