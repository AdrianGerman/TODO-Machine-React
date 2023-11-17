import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      id,
    });
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    return todos[todoIndex];
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = (newTodos.findIndex = newTodos.findIndex(
      (todo) => todo.id === id
    ));
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const newTodos = [...todos];
    const todoIndex = (newTodos.findIndex = newTodos.findIndex(
      (todo) => todo.id === id
    ));
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = (newTodos.findIndex = newTodos.findIndex(
      (todo) => todo.id === id
    ));
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchTodos,
    getTodo,
  };

  const stateUpdaters = {
    setSearchValue,
    completeTodo,
    deleteTodo,
    editTodo,
    addTodo,
    sincronizeTodos,
  };

  return { states, stateUpdaters };
}

function newTodoId(todoList) {
  if (!todoList.length) {
    return 1;
  }
  const idList = todoList.map((todo) => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export { useTodos };
