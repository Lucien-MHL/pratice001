import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/1"
              end
            >
              題目一
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active fw-bold" : "")
              }
              to="/2"
              end
            >
              題目二
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
