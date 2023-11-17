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
import { ChangeAlert } from "../components/ChangeAlert";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchTodos,
  } = states;

  const { setSearchValue, completeTodo, deleteTodo, sincronizeTodos } =
    stateUpdaters;
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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => navigate("/edit/" + todo.id, { state: { todo } })}
          />
        )}
      </TodoList>

      <CreateTodoBtn onClick={() => navigate("/new")} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
}

export { HomePage };
