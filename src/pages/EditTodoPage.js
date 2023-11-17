import React from "react";
import { TodoForm } from "../components/TodoForm";

function EditTodoPage() {
  return (
    <TodoForm
      label="Editar tarea"
      submitText="Editar"
      submitEvent={() => console.log("llamar a EditTodo")}
    />
  );
}

export { EditTodoPage };
