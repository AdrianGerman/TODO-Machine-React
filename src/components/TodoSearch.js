import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input
      disabled={loading}
      placeholder="Buscar tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
