import { useLayoutEffect, useRef, useState } from "react";

const Quotes = ({ data = [] }) => {
  const [boxSize, setBoxSize] = useState({ x: 0, y: 0 });
  const pRef = useRef();
  useLayoutEffect(() => {
    // if (pRef.current?.getBoundingClientRect()) {
      // const { y, x } = pRef.current.getBoundingClientRect();
      const distY = pRef.current?.getBoundingClientRect().y ?? 0;
      const distX = pRef.current?.getBoundingClientRect().x ?? 0;
    // }
    setBoxSize({ distY, distX });
    // console.log(pRef.current?.getBoundingClientRect());
  }, [data]);

  if (data != null) {
    return data.map((info) => (
      <div key={info.quote}>
        <blockquote>
          <p ref={pRef}>{info.quote}</p>
          <footer>{info.author}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
      </div>
    ));
  }
};

export default Quotes;
