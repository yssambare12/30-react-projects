import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between m-4 p-4 bg-green-300 rounded shadow-md">
      <div>
        <img
          className="w-20 h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/544px-Google_2015_logo.svg.png?20160213081640"
          alt="logo"
        />
      </div>
      <div>
        <ul className="flex">
          <li className="mr-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-2">
            <Link to="/todo">ToDo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
