import { act, renderHook } from "@testing-library/react";
import useForm from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "test",
    email: "test@example.com",
  };

  test("Debe de regresar valores por defecto ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result);
    expect(result.current).toEqual({
      name: "test",
      email: "test@example.com",
      formState: initialForm,
      onInputChange: expect.any(Function),
      onRestForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const newName = "Ozzy";
    const { result } = renderHook(() => useForm(initialForm));
    const { name, email, formState, onInputChange, onRestForm } =
      result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
    });
    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test("Debe de resetear el formulario", () => {
    const newName = "Ozzy";
    const { result } = renderHook(() => useForm(initialForm));
    const { name, email, formState, onInputChange, onRestForm } =
      result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
      onRestForm();
    });
    expect(result.current.name).toBe(name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
