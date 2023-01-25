import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    //   document.querySelector("input").select();
    console.log(inputRef);
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      {/* <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your name" /> */}
      <button onClick={onClick}>Set Focus</button>
    </>
  );
};

export default FocusScreen;
