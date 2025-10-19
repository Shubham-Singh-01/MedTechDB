import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignupDoctor.css";

const SignupDoctor = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    const response = await fetch(`${apiUrl}/authdoctor/createdoctor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem('sessionToken', json.sessionToken); // Store session token
      navigate("/");
    } else {
      alert("Failed to create user");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Doctor Signup</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            <label htmlFor="name" className="auth-form-label">
              Full Name
            </label>
            <input
              type="text"
              className="auth-form-control"
              id="name"
              name="name"
              value={credentials.name}
              onChange={onChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="email" className="auth-form-label">
              Email Address
            </label>
            <input
              type="email"
              className="auth-form-control"
              id="email"
              onChange={onChange}
              name="email"
              value={credentials.email}
              placeholder="Enter your email"
              required
            />
            <div className="auth-form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="auth-form-group">
            <label htmlFor="password" className="auth-form-label">
              Password
            </label>
            <input
              type="password"
              className="auth-form-control"
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter your password"
              minLength={8}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="cpassword" className="auth-form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="auth-form-control"
              name="cpassword"
              id="cpassword"
              value={credentials.cpassword}
              onChange={onChange}
              placeholder="Confirm your password"
              minLength={8}
              required
            />
          </div>
          <button type="submit" className="auth-submit-btn">
            Create Account
          </button>
          <p className="auth-link-text">
            Already have an account? <Link to="/loginDoctor" className="auth-link">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupDoctor;
