import { fireEvent, render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/examples/MultipleCustomHooks";
import { useCounters } from "../../src/hooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter.js");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  useCounters.mockReturnValue({ counter: 1, increment: mockIncrement });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto ", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Breaking Bad"));

    const moreQuotesButton = screen.getByRole("button", {
      name: "More quotes",
    });
    expect(moreQuotesButton.disabled).toBeTruthy();
    // console.log(moreQuotesButton.disabled);
    // screen.debug();
  });

  test("Debe de mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Luis",
          quote: "Life is good",
        },
      ],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Life is good"));
    expect(screen.getByText("Luis"));
    // screen.debug();
  });

  test("Debe llamar la función de incrementar ", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Luis",
          quote: "Life is good",
        },
      ],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const moreQuotesButton = screen.getByRole("button", {
      name: "More quotes",
    });
    fireEvent.click(moreQuotesButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
