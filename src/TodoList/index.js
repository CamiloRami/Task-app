import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.searchedTodos.length) && props.EmptyTodos()}

      {props.searchedTodos.map(props.render)} {/*todo => props.render(todo)  y props.render  hacen la misma funcion como paramentro, pero mas corto */}

      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };