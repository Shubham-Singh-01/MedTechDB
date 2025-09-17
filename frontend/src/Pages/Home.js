import React from "react";
import { Link } from "react-router-dom";
import "../Pages/Style.css";

const Home = () => {
  return (
    <div className="auth-container home-layout">
      <div className="auth-card home-card-wider">
        <h1 className="auth-title home-title-larger">Welcome to MedTech</h1>
        <h5 className="home-subtitle">
          Many Problems --{">"} One Solution
        </h5>
        <div className="home-actions">
          <Link
            className="auth-submit-btn"
            to="/LoginSelect"
            role="button"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
