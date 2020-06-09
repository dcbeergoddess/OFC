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
        <Link to="/history" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          History of Change
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Organizing for Change
          </Link>
      </li>
      <li className="nav-item">
        <Link to="/sign-up" className={location.pathname === "/sign-up" ? "nav-link active" : "nav-link"}>
          Sign-up
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>
          Login
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
