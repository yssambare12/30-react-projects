import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggledark } from "./utils/themeStyleSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isdark = useSelector((store) => store.themestyle.isdark);

  return (
    <header
      className={`shadow-md ${
        isdark
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-r from-red-400 to-pink-500 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-300">
          <Link to="/">React Projects</Link>
        </h1>

        <nav>
          <ul className="flex items-center space-x-6 text-lg font-medium">
            <li>
              <button
                onClick={() => dispatch(toggledark())}
                className="px-4 py-2 rounded-lg shadow-md bg-white text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {isdark ? "☀️ Light" : "🌙 Dark"}
              </button>
            </li>
            <li>
              <Link
                to="/todo"
                className="hover:text-yellow-200 hover:underline transition"
              >
                Todo App
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-yellow-200 hover:underline transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/accordian"
                className="hover:text-yellow-200 hover:underline transition"
              >
                Accordian
              </Link>
            </li>
            <li>
              <Link
                to="/bgchange"
                className="hover:text-yellow-200 hover:underline transition"
              >
                BGChangeBtn
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-200 hover:underline transition"
              >
                ContactUS
              </Link>
            </li>
            <li>
              <Link
                to="/foodapp"
                className="hover:text-yellow-200 hover:underline transition"
              >
                FoodApp
              </Link>
            </li>
            <li>
              <Link
                to="/quotegenerator"
                className="hover:text-yellow-200 hover:underline transition"
              >
                QuoteGenerator
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
