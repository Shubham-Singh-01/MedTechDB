import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MedTech</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Documents & Reports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Packages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            {/* Other Servies(Dropdown) */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/* Login/Signup Buttons */}
          <div className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
