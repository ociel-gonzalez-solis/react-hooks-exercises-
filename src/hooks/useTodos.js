import { useEffect, useReducer } from "react";
import todoReducer from "../useReducer/todoReducer";

export const useTodos = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   desc: "Recrear pasteles",
    //   done: false,
    // },
    // {
    //   id: new Date().getTime() * 3,
    //   desc: "Recrear manzanas",
    //   done: false,
    // },
  ];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    return () => {};
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = { type: "[TODO] Add Todo", payload: todo };
    dispatch(action);
  };

  const pendingTodos = todos.filter((todo) => !todo.done).length;

  const handleDeleteTodo = (id) => {
    const action = { type: "[TODO] Remove Todo", payload: id };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = { type: "[TODO] Toggle Todo", payload: id };
    dispatch(action);
  };
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodos,
  };
};
