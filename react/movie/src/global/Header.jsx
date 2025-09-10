import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">MyLogo</div>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Movie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
