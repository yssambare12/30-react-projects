import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
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
      </ul>
    </div>
  );
};

export default Header;
