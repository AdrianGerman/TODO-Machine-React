import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoBtn } from "../components/CreateTodoBtn";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
// import { EmptyTodosNone } from "../components/EmptyTodosNone";
import { TodoContext } from "../context/TodoContext";
import { Modal } from "../components/TodoModal";
import { TodoForm } from "../components/TodoForm";
import React from "react";

function AppUI() {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    // <React.Fragment>
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            {/* <TodosLoading />
            <TodosLoading /> */}
          </>
        )}
        {error && <TodosError />}
        {!loading && searchTodos.length === 0 && <EmptyTodos />}
        {/* {!loading && totalTodos.length === 0 && <EmptyTodosNone />} */}

        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoBtn setOpenModal={setOpenModal} />
      {/* </React.Fragment> */}

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
