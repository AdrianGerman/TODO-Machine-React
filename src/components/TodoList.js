import "../styles/TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchTodos.length && props.onEmptyTodos()}

      {props.searchTodos.map(props.render)}
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export { TodoList };
