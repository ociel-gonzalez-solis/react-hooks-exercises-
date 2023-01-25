import { useLayoutEffect, useRef, useState } from "react";

const Quotes = ({ data = [] }) => {
  const [boxSize, setBoxSize] = useState({ x: 0, y: 0 });
  const pRef = useRef();
  useLayoutEffect(() => {
    const { y, x } = pRef.current?.getBoundingClientRect();
    setBoxSize({ y, x });
    console.log(pRef.current?.getBoundingClientRect());
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
