import React from "react";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../context/useTodos";

function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label="Escribe tu nueva tarea"
      submitText="Añadir"
      submitEvent={(text) => addTodo(text)}
    />
  );
}

export { NewTodoPage };
