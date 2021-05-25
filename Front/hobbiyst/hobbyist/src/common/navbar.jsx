import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        HOBBYIST
      </a>

      <div
        className="collapse navbar-collapse nav-masthead justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <NavLink className="nav-link " to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>

          {user && (
            <React.Fragment>
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
          {!user && (
            <React.Fragment>
              <NavLink className="nav-link general  Login" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link general Register" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
