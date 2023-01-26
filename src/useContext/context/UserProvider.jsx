import { UserContext } from "./UserContext";

const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ alloja: "worlds news", user: user }}>
      {children}
    </UserContext.Provider>
  );
};
