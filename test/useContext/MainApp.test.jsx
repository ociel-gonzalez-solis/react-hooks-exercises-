import { render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import routesConfig from "../../src/useContext/Router";

describe("Pruebas en <MainApp/>", () => {
  test("Debe de mostrar el HomePage ", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("Debe de mostrar el LoginPage ", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/login"],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
