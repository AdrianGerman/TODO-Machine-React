import React from "react";
import { TodoForm } from "../components/TodoForm";

function NewTodoPage() {
  return (
    <TodoForm
      label="Escribe tu nueva tarea"
      submitText="Añadir"
      submitEvent={() => console.log("llamar a addtodo")}
    />
  );
}

export { NewTodoPage };
