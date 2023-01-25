import { useState } from "react";

export const useCounters = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);
  const originial = initialValue;

  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const decrement = (value = 1) => {
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(originial);
  };

  return { counter, increment, reset, decrement };
};
