import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/useReducer/components/TodoItem";

describe("Pruebas en <TodoItem/>", () => {
  const TODO = { id: 1, desc: "Recrear pasteles", done: false };

  const onToggleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el TODO pendiente de completar", () => {
    render(
      <TodoItem
        todo={TODO}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    const liElementStyles =
      "list-group-item d-flex justify-content-align-content-between";
    // console.log(liElement.innerHTML);
    expect(liElement.className).toBe(liElementStyles);
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
    // console.log(spanElement.className);
    // screen.debug();
  });

  test("Debe de mostrar el TODO completado", () => {
    TODO.done = true;
    render(
      <TodoItem
        todo={TODO}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
    // console.log(spanElement.className);
    // screen.debug();
  });

  test("Span debe de llamar el ToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={TODO}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(TODO.id);
  });

  test("El boton debe de llamar al DeleteTodo al hacer click", () => {
    render(
      <TodoItem
        todo={TODO}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(TODO.id);
  });
});
