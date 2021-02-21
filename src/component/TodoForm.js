import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo(input, uuidv4());
    setInput("");
  };

  return (
    <form className={style.inputField} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        className={style.todoInput}
        value={input}
        onChange={handleInput}
      />
    </form>
  );
};

export default TodoForm;
