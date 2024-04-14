import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logout button clicked");
        localStorage.removeItem("token");
        navigate("/login");
    };

    console.log("Start component rendered");

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "20vh" }}>
            <div>
                <h1>You Have Successfully Logged In</h1>
                <h4>Welcome to the Internal Page</h4>
                <button onClick={handleLogout} className="btn btn-primary">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Start;



