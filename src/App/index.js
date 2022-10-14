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
import { ChangeAlert } from '../ChangeAlert'
import { ButtonContainer } from '../ButtonContainer'
import { HeaderButton } from '../HeaderButton'
import { SignUp } from '../SignUp'
import { LogIn } from '../LogIn'

function App() {
  const { states, stateUpdaters } = useTodos()
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    modalContent,
    user,
    token,
    isLogged,
  } = states

  const {
    setSearchValue,
    addTodo,
    completeTodoSwitch,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
    setModalContent,
    login,
    logout,
  } = stateUpdaters

  React.useEffect(() => {
    console.log(user)
    console.log(token)
    console.log(isLogged)
  }, [user, token, isLogged])

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />

        <ButtonContainer>
          <HeaderButton
            setOpenModal={setOpenModal}
            openModal={openModal}
            setModalContent={setModalContent}
          >
            Sign Up
          </HeaderButton>
          <HeaderButton
            setOpenModal={setOpenModal}
            openModal={openModal}
            setModalContent={setModalContent}
          >
            Log In
          </HeaderButton>
        </ButtonContainer>

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
      >
        {todo => (
          <TodoItem
            key={todo._id}
            description={todo.description}
            isCompleted={todo.isCompleted}
            onComplete={() => completeTodoSwitch(todo._id)}
            onDelete={() => deleteTodo(todo._id)}
          />
        )}
      </TodoList>      
      
      {/* <ChangeAlert
        sincronize={sincronizeTodos}
        logout={logout}
        isLogged={isLogged}
      /> */}

      {openModal && (
        <Modal>
          {modalContent === 'TodoForm' && (
            <TodoForm 
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          )}
          {modalContent === 'Sign Up' && (
            <SignUp
              setOpenModal={setOpenModal}
            />
          )}
          {modalContent === 'Log In' && (
            <LogIn
              setOpenModal={setOpenModal}
              login={login}
            />
          )}
        </Modal>
        )
      }

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
        setModalContent={setModalContent}
      />
    </React.Fragment>
  )
}

export default App;