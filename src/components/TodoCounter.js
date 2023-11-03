import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      Tareas
    </h1>
  );
}

export { TodoCounter };
