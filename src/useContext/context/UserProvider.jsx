import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 1,
//   name: "John",
//   email: "john@example.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ morning: "worlds news", user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
