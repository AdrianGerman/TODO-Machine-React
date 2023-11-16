import React from "react";
import { useTodos } from "../context/useTodos";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoHeader } from "../components/TodoHeader";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoBtn } from "../components/CreateTodoBtn";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { EmptySearchResults } from "../components/EmptySearchResults";
import { Modal } from "../components/TodoModal";
import { TodoForm } from "../components/TodoForm";
import { ChangeAlert } from "../components/ChangeAlert";

function HomePage() {
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchTodos,
    openModal,
  } = states;

  const {
    setSearchValue,
    completeTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    sincronizeTodos,
  } = stateUpdaters;
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={() => (
          <EmptySearchResults searchText={searchValue} />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            onEdit={() => console.log("Toy editandooo")}
          />
        )}
      </TodoList>

      <CreateTodoBtn setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
}

export { HomePage };
