import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
       
      ],
    },
  ]);
  