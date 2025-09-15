import Header from "./Projects/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ToDo from "./Projects/Todo/Todo";
import Home from "./Projects/Home";
import Accordian from "./Projects/Accordian/Accordian";
import store from "./Projects/utils/store";
import { Provider } from "react-redux";
import BGchangeButton from "./Projects/BgChangeBtn/BgchangeBtn";
import Contactform from "./Projects/Contact/ContactForm";
import FoodApp from "./Projects/FoodOrder/FoodApp";
import ResturantPage from "./Projects/FoodOrder/ResturantPage";
import QuoteGenerator from "./Projects/QuoteGenerator/QuoteGenerator";
import ProfileCard from "./Projects/ProfileCard/ProfileCard";
import CryptoPrice from "./Projects/CrypotPrice/CryptoPrice";

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
      {
        element: <Contactform />,
        path: "/contact",
      },
      {
        element: <FoodApp />,
        path: "/foodapp",
      },
      {
        element: <ResturantPage />,
        path: "/restaurant/:restaurantId",
      },
      {
        element: <QuoteGenerator />,
        path: "/Quotegenerator",
      },
      {
        element: <ProfileCard />,
        path: "/profilecard",
      },
      {
        path: "/cryptoprice",
        element: <CryptoPrice />,
      },
    ],
  },
]);

export default App;
