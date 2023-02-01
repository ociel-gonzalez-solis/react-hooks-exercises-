import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>
        HomePage <span>{user?.name}</span>
      </h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 1)}</pre>
    </>
  );
};
