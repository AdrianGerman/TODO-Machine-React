import React from "react";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../context/useTodos";
import { useParams } from "react-router-dom";

function EditTodoPage() {
  const { stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  const params = useParams();
  const id = Number(params.id);
  // const { id } = useParams();

  return (
    <TodoForm
      label="Editar tarea"
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };
