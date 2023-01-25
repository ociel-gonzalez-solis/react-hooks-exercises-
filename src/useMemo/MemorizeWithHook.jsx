import { useMemo, useState } from "react";
import { useCounters } from "../hooks";

const heavySuff = (iterationNumber = 100) => {
  for (let itNum = 0; itNum < iterationNumber; itNum++) {
    console.log(`Ahí vamos ${itNum} veces`);
  }

  return `${iterationNumber} iteraciones relaizadas`;
};

const MemoHook = () => {
  const { counter, increment } = useCounters(4);
  const [show, setShow] = useState(true);
  const memorizeValue = useMemo(() => heavySuff(counter), [counter]);
  return (
    <div>
      <h1>
        Counter: <small>{counter} </small>
      </h1>
      <hr />

      <h4>{memorizeValue}</h4>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide: {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
