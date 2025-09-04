import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const isdark = useSelector((store) => store.themestyle.isdark);
  return (
    <div
      className={`bg-gray-800 ${
        isdark ? "text-white bg-black" : "text-black bg-red-400"
      } text-white p-4 flex justify-between items-center`}
    >
      <h1 className="text-2xl font-bold">
        <Link to="/">React Projects</Link>
      </h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/todo">Todo App</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accordian">Accordian</Link>
        </li>
        <li>
          <Link to="/bgchange">BGChangeBtn</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
