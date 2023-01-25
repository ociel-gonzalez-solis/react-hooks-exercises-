import React, { useState } from "react";
import Small from "../components/Small";
import { useCounters } from "../hooks";

const Memorize = () => {
  const { counter, increment } = useCounters(1);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide: {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
