import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginDoctor.css";

const LoginDoctor = (props) => {
  const [credentials, setCredential] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    const response = await fetch(`${apiUrl}/authdoctor/LoginDoctor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      localStorage.setItem('sessionToken', json.sessionToken);
      navigate("/StartDoctor");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Doctor Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            <label htmlFor="email" className="auth-form-label">
              Email Address
            </label>
            <input
              type="email"
              className="auth-form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
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
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="auth-submit-btn">
            Sign In
          </button>
          <p className="auth-link-text">
            Don't have an account? <Link to="/signupDoctor" className="auth-link">Create one</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginDoctor;
