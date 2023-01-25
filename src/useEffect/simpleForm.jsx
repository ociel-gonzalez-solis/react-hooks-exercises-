import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "ozzy",
    email: "ozzy@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("Lammando useEffect");
  }, []);

  useEffect(() => {
    // console.log("Lammando nuevo email");
  }, [email]);

  useEffect(() => {
    // console.log("Lammando nuevo formState");
  }, [formState]);

  return (
    <>
      <h1>Simple Form</h1>
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
      {username === "ozzy2" && <Message />}
    </>
  );
};

export default SimpleForm;
