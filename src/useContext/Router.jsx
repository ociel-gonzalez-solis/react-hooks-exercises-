import { createBrowserRouter } from "react-router-dom";
import { MainApp } from "./MainApp";
import { AboutPage, ErrorPage, HomePage, LoginPage } from "./Pages";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
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
  ]);

  return router;
};
