import React from "react";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../context/useTodos";
import { useParams } from "react-router-dom";

function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);

  const { states, stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  const { loading, getTodo } = states;

  if (loading) {
    return <p>Cargando....</p>;
  } else {
    const todo = getTodo(id);
    return (
      <TodoForm
        label="Editar tarea"
        defaultTodoText={todo.text}
        submitText="Editar"
        submitEvent={(newText) => editTodo(id, newText)}
      />
    );
  }
}

export { EditTodoPage };
