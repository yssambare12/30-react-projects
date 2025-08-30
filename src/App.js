import Header from "./Projects/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ToDo from "./Projects/Todo/Todo";
import Home from "./Projects/Home";

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
