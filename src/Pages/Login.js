import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredential] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/Login", {
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
      localStorage.setItem('sessionToken', json.sessionToken); // Store session token
      navigate("/Start"); // Navigate to the /start route
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        position: "absolute",
        top: "25%",
        left: "25%",
        minHeight: "50vh",
        maxWidth: "800px",
        maxHeight: "70vh",
      }}
    >
      <form onSubmit={handleSubmit} className="w-50">
        <h5 align="Center" fontsize="24px" >User Login</h5>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <div className="mb-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
