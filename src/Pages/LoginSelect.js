import React from "react";
import { Link } from "react-router-dom";

const LoginSelect = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "30px",
            padding: "50px",
          }}
        >
          <h2 style={{ marginBottom: "30px", fontSize: "24px" }}>Choose Your Login Type</h2>

          <div style={{ marginBottom: "15px" }}>
            <Link
              className="btn btn-primary btn-lg"
              to="/Login"
              role="button"
              style={{
                borderRadius: "30px",
                padding: "10px 30px",
                fontSize: "18px",
              }}
            >
              User Login
            </Link>
          </div>

          <div >
            <Link
              className="btn btn-primary btn-lg"
              to="/LoginDoctor"
              role="button"
              style={{
                borderRadius: "30px",
                padding: "10px 30px",
                fontSize: "18px",
              }}
            >
              Doctor Login
            </Link>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default LoginSelect;
