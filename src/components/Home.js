import React from "react";
import { Link } from 'react-router-dom';
import "../components/Style.css";

const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{ 
        position: 'absolute', 
        top: '70%', 
        left: '18%', 
        transform: 'translate(-50%, -50%)', 
        textAlign: 'left',
      }}>
        <div style={{ 
          backdropFilter: 'blur(8px)', 
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '20px', // Adjust the value for desired corner radius
          padding: '20px',
        }}>
          <h1>Welcome to MedTech</h1>
          <h5 style={{ marginBottom: '10px' }}> Many Problems --{">"} One Solution </h5>
          <div className="d-flex">
            <Link 
              className="btn btn-primary mx-0" 
              to="/login" 
              role="button" 
              style={{ 
                fontSize: '17px', 
                borderRadius: '8px', 
                width: '85px' 
              }}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}  
export default Home;
