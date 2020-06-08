import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/help"
          className={location.pathname === "/help" ? "nav-link active" : "nav-link"}
          >
            Help
          </Link>
      </li>
      <li className="nav-item">
        <Link
        to="/help/faq"
        className={location.pathname === "/help/faq" ? "nav-link active" : "nav-link"}
        >
          FAQ
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
