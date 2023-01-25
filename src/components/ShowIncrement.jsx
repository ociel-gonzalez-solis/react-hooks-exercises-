import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("Regenerando");
  return (
    <button
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

export default ShowIncrement;
