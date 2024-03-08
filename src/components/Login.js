import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = (props) => {
    const [credentials, setCredential] = useState({email: "",password: ""})
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/Login", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
    const json = await response.json();
    console.log(json);
    if (json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken); 
      navigate("/Start");

  }
  else{
      alert("Invalid credentials");
  }
}

const onChange = (e)=>{
    setCredential({...credentials, [e.target.name]: e.target.value})
}

return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "50vh", minWidth: "30px" }}>
        <form onSubmit={handleSubmit} className="w-50">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default Login