import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform the logout functionality here, e.g., clear the user's session or token.
        // You can use localStorage.removeItem or a similar method to clear the token.
        localStorage.removeItem("token");

        // Redirect the user to the login page or any other desired page after logging out.
        navigate("/login");
    };

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



