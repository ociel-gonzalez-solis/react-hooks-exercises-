import { act, renderHook } from "@testing-library/react";
import { useCounters } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounters());
    const { counter, increment, reset, decrement } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounters(100));
    const { counter, increment, reset, decrement } = result.current;
    expect(counter).toBe(100);
  });

  test("debe de incrementar el contador ", () => {
    const { result } = renderHook(() => useCounters(100));
    const { counter, increment, reset, decrement } = result.current;
    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(103);
  });

  test("debe de decrementar el contador ", () => {
    const { result } = renderHook(() => useCounters(100));
    const { counter, increment, reset, decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBe(97);
  });

  test("debe de resetear el contador ", () => {
    const { result } = renderHook(() => useCounters(100));
    const { counter, increment, reset, decrement } = result.current;
    act(() => {
      decrement();
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
