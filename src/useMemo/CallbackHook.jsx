import { useCallback, useState } from "react";
import ShowIncrement from "../components/ShowIncrement";

const CallbackHook = () => {
  const incrementFather = useCallback((value) => {
    setCounter((counter) => counter + 1 + value);
  }, []);

  const [counter, setCounter] = useState(10);

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};

export default CallbackHook;
