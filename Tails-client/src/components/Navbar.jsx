import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-around items-center border-t border-gray-200 w-full">
      {/* Search button */}
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="9" />
        </svg>
      </NavLink>
      {/* Saved / Favorite Places Button*/}
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="9" />
        </svg>
      </NavLink>
      {/* filter Button*/}
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="9" />
        </svg>
      </NavLink>
      {/* Profile Button*/}
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="9" />
        </svg>
      </NavLink>
    </nav>
  );
}

export default Navbar;
