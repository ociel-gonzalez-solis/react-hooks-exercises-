import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { UserProvider } from "./context/UserProvider";
import { AboutPage, ErrorPage, HomePage, LoginPage } from "./Pages";

const routesConfig = [
  {
    path: "/",
    element: (
      <>
        <UserProvider>
          <NavBar />
          <Outlet />
        </UserProvider>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
];

export default routesConfig;
