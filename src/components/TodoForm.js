import React from "react";
import "../styles/TodoForm.css";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        placeholder="Escribe aqui el texto"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
