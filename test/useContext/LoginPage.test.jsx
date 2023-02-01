import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/useContext/context/UserContext";
import { LoginPage } from "../../src/useContext/Pages/LoginPage";

describe("Pruebas en el componente <LoginPage/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Debe mostrar el componente sin el usuario ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
    // screen.debug();
  });

  test("Debe llamar al setUser cuando hace click en el botón ", () => {
    const setUserMock = jest.fn();
    const newUser = { id: 2, name: "John2", email: "john2@example.com" };

    render(
      <UserContext.Provider value={{ user: newUser, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button", { name: "Set User" });
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalled();
  });
});
