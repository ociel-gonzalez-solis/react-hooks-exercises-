import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
// import { MainApp } from "./useContext/MainApp";
// import { TodoApp } from "./useReducer/TodoApp";
// import { Padre } from "./useMemo/tarea/Padre";
// import "./useReducer/intro-reducer";

// import CallbackHook from "./useMemo/CallbackHook";
// import MemoHook from "./useMemo/MemorizeWithHook";
// import Memorize from "./useMemo/Memorize";
// import FocusScreen from "./useRef/FocusScreen";
// import Layout from "./useLayoutEffect/Layout";
// import MultipleCustomHooks from "./examples/MultipleCustomHooks";
// import CustomHooksForm from "./useEffect/CustomHooksForm";
// import HookApp from "./HooksApp";
// import CounterApp from "./useState/CounterApp";
// import CounterAppCustomHook from "./useState/CounterAppCustomHook";
// import SimpleForm from "./useEffect/simpleForm";
import { RouterProvider } from "react-router-dom";
import { Router } from "./useContext/Router";

const router = Router();

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
