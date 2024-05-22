import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white">
      {/* Search button */}
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
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
