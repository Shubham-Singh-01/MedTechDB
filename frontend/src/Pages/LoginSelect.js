import React from "react";
import { Link } from "react-router-dom";
import "./LoginSelect.css";

const LoginSelect = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="login-select-content">
          <h2 className="auth-title">Choose Your Login Type</h2>
          <p className="login-select-subtitle">
            Select the appropriate option to access your account
          </p>
          <div className="login-select-buttons">
            <Link
              className="auth-submit-btn login-select-btn"
              to="/Login"
            >
              User Login
            </Link>
            <Link
              className="auth-submit-btn login-select-btn"
              to="/LoginDoctor"
            >
              Doctor Login
            </Link>
          </div>
          <div className="auth-link-text login-select-links">
            Need an account?
            <br />
            <Link to="/signup" className="auth-link">Sign up as User</Link>
            {' • '}
            <Link to="/signupDoctor" className="auth-link">Sign up as Doctor</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelect;
