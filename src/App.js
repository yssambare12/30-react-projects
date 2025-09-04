import Header from "./Projects/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ToDo from "./Projects/Todo/Todo";
import Home from "./Projects/Home";
import Accordian from "./Projects/Accordian/Accordian";
import store from "./Projects/utils/store";
import { Provider } from "react-redux";
import BGchangeButton from "./Projects/BgChangeBtn/BgchangeBtn";

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
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
      {
        element: <Accordian />,
        path: "/accordian",
      },
      {
        element: <BGchangeButton />,
        path: "/bgchange",
      },
    ],
  },
]);

export default App;
