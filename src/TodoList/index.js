import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!props.searchedTodos.length && !!props.totalTodos) && props.onEmptySearchResults()}

      {(!props.loading && !props.error) && props.searchedTodos.map(props.children)}

    </section>
  );
}

export { TodoList };

