import React from "react";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../context/useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  const { states, stateUpdaters } = useTodos();
  const { loading, getTodo } = states;
  const { editTodo } = stateUpdaters;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando....</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label="Editar tarea"
      defaultTodoText={todoText}
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };
