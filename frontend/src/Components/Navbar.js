import React, { useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBrandClick = useCallback((e) => {
    e.preventDefault();
    
    // Scroll to top with smooth animation
    const scrollToTop = () => {
      // Try smooth scroll first
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback for browsers that don't support smooth scroll
        window.scrollTo(0, 0);
      }
      // Also set these as backup
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Check if already on home page
    if (location.pathname === '/') {
      // Just scroll to top
      scrollToTop();
    } else {
      // Navigate to home first
      navigate('/');
      // Force scroll after navigation with a small delay
      setTimeout(scrollToTop, 100);
    }
  }, [location.pathname, navigate]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleBrandClick}>
          <img src="/Favicon.ico" alt="MedTech Logo" width="30" height="30" className="d-inline-block align-text-top me-2"/>
          MedTech
        </Link>
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
              <Link className="nav-link" to="/LoginSelect">Documents & Reports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LoginSelect">Packages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ImageGallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
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

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
