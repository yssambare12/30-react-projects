import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggledark } from "./utils/themeStyleSlice";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isdark = useSelector((store) => store.themestyle.isdark);
  const [submenu, setSubMenu] = useState(false);

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
                to="/"
                className="hover:text-yellow-200 hover:underline transition"
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer" onClick={() => setSubMenu(!submenu)}>
              Projects {submenu ? "⬆" : "⬇"}
            </li>
          </ul>
          {submenu && (
            <div className="absolute right-6 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
              <ul className="py-2 list-none">
                <li>
                  <Link
                    to="/todo"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    ✅ Todo App
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accordian"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    📂 Accordion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bgchange"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    🎨 BGChangeBtn
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    📞 ContactUs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/foodapp"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    🍔 FoodApp
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quotegenerator"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    💡 QuoteGenerator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profilecard"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    🪪 ProfileCard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cryptoprice"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    💰 CryptoPrice
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
