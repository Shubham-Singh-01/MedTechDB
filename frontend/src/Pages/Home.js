import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Welcome to MedTech</h1>
        <h5 className="home-subtitle">
          Many Problems --{">"} One Solution
        </h5>
        <div className="home-actions">
          <Link
            className="home-btn"
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
