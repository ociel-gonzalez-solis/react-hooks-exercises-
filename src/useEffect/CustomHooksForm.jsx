import { useEffect } from "react";
import useForm from "../hooks/useForm";

const CustomHooksForm = () => {
  /**
   * {
    username: "",
    email: "",
    password: "",
  }
   */
  const formCustom = {
    username: "",
    email: "",
    password: "",
  };
  const { formState, onInputChange, onRestForm, username, email, password } =
    useForm(formCustom);

  // const { username, email, password } = formState;

  // useEffect(() => {
  //   // console.log("Lammando useEffect");
  // }, []);

  // useEffect(() => {
  //   // console.log("Lammando nuevo email");
  // }, [email]);

  // useEffect(() => {
  //   // console.log("Lammando nuevo formState");
  // }, [formState]);

  return (
    <>
      <h1>Custom Hooks Form</h1>
      <hr />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        placeholder="test@test.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onRestForm}>Borrar</button>
    </>
  );
};

export default CustomHooksForm;
