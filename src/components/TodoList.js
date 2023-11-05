import "../styles/TodoList.css";

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!(props.totalTodos && !props.searchTodos.length) &&
        props.onEmptySearchResults(props.searchText)}

      <ul className="TodoList">
        {!props.loading && !props.error && props.searchTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList };
