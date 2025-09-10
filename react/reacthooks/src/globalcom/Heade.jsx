import { Link, NavLink } from "react-router-dom";
import Parent from "../hooks/memo/Parent";
import Useref from "../hooks/UseRef";

const Header = () => {
  return (
    <>
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <nav className="flex space-x-6">
        <NavLink
          to="/"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          About
        </NavLink>
      </nav>
    </header>
    
    <Useref />

    </> 
  );
};

export default Header;
