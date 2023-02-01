import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en <TodoApp/>", () => {
  const initialTodos = [
    { id: 1, desc: "Recrear pasteles", done: false },
    { id: 2, desc: "Recrear tacos", done: false },
  ];
  useTodos.mockReturnValue({
    todos: initialTodos,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    pendingTodos: 1,
  });
  test("Debe de mostrar el componente correctamente ", () => {
    render(<TodoApp />);
    // screen.debug();
    // console.log(screen.getByRole("textbox").name);
    expect(screen.getByText("Recrear pasteles")).toBeTruthy();
    expect(screen.getByText("Recrear tacos")).toBeTruthy();
    expect(screen.getByRole("textbox").name).toBeTruthy();
  });
});

