import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  const { data, isLoading, hasError } = state;

  const getFetchRequest = async () => {
    setState({ ...state, isLoading: true });
    const res = await fetch(url);
    const data = await res.json();
    setState({ data, isLoading: false, hasError: null });
  };

  useEffect(() => {
    getFetchRequest();
    return () => {};
  }, [url]);

  return {
    data,
    isLoading,
    hasError,
  };
};
