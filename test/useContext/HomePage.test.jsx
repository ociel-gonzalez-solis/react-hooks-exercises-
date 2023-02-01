import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/useContext/context/UserContext";
import { HomePage } from "../../src/useContext/Pages/HomePage";

describe("Pruebas en <HomePage/>", () => {
  const user = {
    id: 1,
    name: "John",
  };
  test("Debe de mostrar el componente sin el user ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
    screen.debug();
  });

  test("Debe de mostrar el componente con el user ", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag1 = screen.getByLabelText("pre");
    const preTag2 = JSON.parse(screen.getByLabelText("pre").innerHTML);
    expect(preTag2).toEqual(user);
    expect(preTag1.innerHTML).toContain(user.name);
    expect(preTag1.innerHTML).toContain(`${user.id}`);
    // screen.debug();
  });
});
