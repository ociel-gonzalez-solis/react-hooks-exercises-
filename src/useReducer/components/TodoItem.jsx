import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li>
      <span
        className={`${todo.done ? "text-decoration-line-through" : ""}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.desc}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  );
};
