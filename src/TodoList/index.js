import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFn = props.children || props.render

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!props.searchedTodos.length && !!props.totalTodos) && props.onEmptySearchResults()}

      {props.searchedTodos.map(renderFn)}            {/*todo => props.render(todo)  y props.render  hacen la misma funcion como paramentro, pero mas corto*/}

    </section>
  );
}

export { TodoList };

