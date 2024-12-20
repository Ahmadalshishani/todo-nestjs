import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import Main from "./layout/Main";

function App() {
  return (
    <RouterProvider router={router}>
      <Main></Main>
    </RouterProvider>
  );
}

export default App;
