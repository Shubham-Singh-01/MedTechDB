import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./axios";
import EditProfileForm from "../Components/EditProfileForm";
import "./Style.css"; // Import CSS file

const Start = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    address: "",
    permanentAddress: "",
    recoveryEmail: "",
    phone1: "",
    phone2: "",
    ayushmanCard: "",
    bloodGroup: "",
    height: "",
    weight: "",
    aadhaarCard: "",
    dob: "", // Add date of birth field
    photo: "", // Add photo field (you can store a URL or base64 data)
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await api.get("/auth/getuser");
        setUserData(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          gender: response.data.gender || "",
          address: response.data.address || "",
          permanentAddress: response.data.permanentAddress || "",
          recoveryEmail: response.data.recoveryEmail || "",
          phone1: response.data.phone1 || "",
          phone2: response.data.phone2 || "",
          ayushmanCard: response.data.ayushmanCard || "",
          bloodGroup: response.data.bloodGroup || "",
          heightFeet: response.data.heightFeet || "", // Include heightFeet
          heightInches: response.data.heightInches || "", // Include heightInches
          weight: response.data.weight || "",
          aadhaarCard: response.data.aadhaarCard || "",
          dob: response.data.dob || "",
          photo: response.data.photo || "",
        });
      } catch (error) {
        setError("Error fetching user data");
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    console.log("Logout button clicked");
    localStorage.removeItem("token");
    localStorage.removeItem("sessionToken");
    navigate("/Login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/auth/updateuser", formData);
      console.log(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({
      name: userData.name,
      email: userData.email,
      gender: userData.gender || "",
      address: userData.address || "",
      permanentAddress: userData.permanentAddress || "",
      recoveryEmail: userData.recoveryEmail || "",
      phone1: userData.phone1 || "",
      phone2: userData.phone2 || "",
      ayushmanCard: userData.ayushmanCard || "",
      bloodGroup: userData.bloodGroup || "",
      heightFeet: userData.heightFeet || "", // Include heightFeet
      heightInches: userData.heightInches || "", // Include heightInches
      weight: userData.weight || "",
      dob: userData.dob || "",
      aadhaarCard: userData.aadhaarCard || "",
    });
  };

  console.log("Start component rendered");

  return (
    <div className="start-container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <div className="content">
          {isEditing ? (
            <EditProfileForm
              formData={formData}
              setFormData={setFormData} // Pass setFormData as a prop
              handleSubmit={handleSubmit}
              handleCancelClick={handleCancelClick}
            />
          ) : (
            <div className="profile-box">
              <h1>Welcome {userData.name}</h1>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              {/* Display other user data */}
              <div className="profile-actions">
                <button onClick={handleEditClick} className="btn btn-primary">
                  Edit Profile
                </button>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Start;
