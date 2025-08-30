import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ToDo from "./Components/Todo";
import Home from "./Components/Home";

export function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <ToDo />,
        path: "/todo",
      },
    ],
  },
]);

export default App;
