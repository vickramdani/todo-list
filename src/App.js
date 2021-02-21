import React, { useState, useEffect } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task, id) => {
    const newTodos = [...todos, { id, task }];
    setTodos(newTodos);
  };

  const removeTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodos = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todo-app container">
      <h1>Todo List App</h1>
      <TodoForm addTodo={addTodo} todos={todos} />
      <TodoList
        todos={todos}
        removeTodos={removeTodos}
        completeTodos={completeTodos}
      />
    </div>
  );
};

export default App;
