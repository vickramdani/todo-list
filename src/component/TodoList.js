import React from "react";
import style from "./TodoList.module.css";

const TodoList = ({ todos, removeTodos, completeTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="card-panel" id={style.list} key={todo.id}>
          <div>
            <p
              style={{
                textDecoration: todo.isCompleted === true ? "line-through" : "",
              }}
              className={style.todolist}
            >
              {todo.task}
            </p>
          </div>
          <div>
            <button
              className="btn waves-effect waves-light red"
              onClick={() => removeTodos(todo.id)}
            >
              <i className="material-icons">close</i>
            </button>
            <button
              className="btn waves-effect waves-light"
              onClick={() => completeTodos(todo.id)}
            >
              <i className="material-icons">check</i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
