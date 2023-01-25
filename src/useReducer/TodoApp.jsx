import { useTodos } from "../hooks";
import { TodoAdd, TodoList } from "./components";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodos,
  } = useTodos();
  return (
    <>
      <h1>
        TodoApp: {todos.length}, pending: {pendingTodos}
      </h1>
      <hr />
      <div>
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
        <div>
          <h4>Add all</h4>
          <hr />
          {/* TodoAdd */}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* TodoAdd */}
        </div>
      </div>
    </>
  );
};
