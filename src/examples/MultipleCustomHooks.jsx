import Quotes from "../components/Quotes";
import { useCounters, useFetch } from "../hooks";

const MultipleCustomHooks = () => {
  const { counter, increment, reset, decrement } = useCounters(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  // const { author, quote } = data != null ? data[0] : "";

  return (
    <>
      {isLoading && <h1>Cargando...</h1>}

      <h1>Breaking Bad</h1>
      <hr />
      {counter <= 0 && <h3>Quote Loading...</h3>}
      <Quotes data={data} />
      <button className="btn btn-primary" onClick={() => increment()}>
        More quotes
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement()}>
        Less quotes
      </button>
    </>
  );
};

export default MultipleCustomHooks;
