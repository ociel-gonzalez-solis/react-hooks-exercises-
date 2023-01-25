import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    // console.log("Message mounted");
    const mousemovment = ({ x, y }) => {
      const cords = { x, y };
      console.log(cords);
    };
    window.addEventListener("mousemove", mousemovment);

    return () => {
      //   console.log("Message dismounted");
      window.removeEventListener("mousemove", mousemovment);
    };
  }, []);

  return (
    <div>
      <h3>Usuario ya existe</h3>
    </div>
  );
};

export default Message;
