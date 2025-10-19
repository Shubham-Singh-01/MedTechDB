import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./axios";
import EditProfileForm from "../Components/EditProfileForm";
import "./Start.css"; // Import CSS file

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
    heightFeet: "",
    heightInches: "",
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
        
        // Format DOB for date input (YYYY-MM-DD format)
        let formattedDob = "";
        if (response.data.dob) {
          const dateObj = new Date(response.data.dob);
          formattedDob = dateObj.toISOString().split('T')[0]; // Gets YYYY-MM-DD
        }
        
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
          heightFeet: response.data.heightFeet !== null && response.data.heightFeet !== undefined ? response.data.heightFeet : "", // Include heightFeet - support 0
          heightInches: response.data.heightInches !== null && response.data.heightInches !== undefined ? response.data.heightInches : "", // Include heightInches - support 0
          weight: response.data.weight || "",
          aadhaarCard: response.data.aadhaarCard || "",
          dob: formattedDob,
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
    
    // Format DOB for date input (YYYY-MM-DD format)
    let formattedDob = "";
    if (userData.dob) {
      const dateObj = new Date(userData.dob);
      formattedDob = dateObj.toISOString().split('T')[0]; // Gets YYYY-MM-DD
    }
    
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
      heightFeet: userData.heightFeet !== null && userData.heightFeet !== undefined ? userData.heightFeet : "", // Include heightFeet - support 0
      heightInches: userData.heightInches !== null && userData.heightInches !== undefined ? userData.heightInches : "", // Include heightInches - support 0
      weight: userData.weight || "",
      dob: formattedDob,
      aadhaarCard: userData.aadhaarCard || "",
    });
  };

  console.log("Start component rendered");

  return (
    <div className="start-page-container">
      {isLoading ? (
        <div className="auth-card">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading your profile...</p>
          </div>
        </div>
      ) : error ? (
        <div className="auth-card">
          <div className="error-message">
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="auth-submit-btn">
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <>
          {isEditing ? (
            <EditProfileForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              handleCancelClick={handleCancelClick}
              userType="user"
            />
          ) : (
            <div className="auth-card profile-dashboard">
              <h1 className="auth-title">Welcome Back!</h1>
              <div className="profile-info">
                <div className="profile-header">
                  <div className="profile-avatar">
                    {userData.name ? userData.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="profile-details">
                    <h2>{userData.name}</h2>
                    <p className="profile-email">{userData.email}</p>
                  </div>
                </div>
                
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-label">Phone</span>
                    <span className="stat-value">{userData.phone1 || 'Not added'}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Blood Group</span>
                    <span className="stat-value">{userData.bloodGroup || 'Not added'}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Gender</span>
                    <span className="stat-value">{userData.gender || 'Not specified'}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Weight</span>
                    <span className="stat-value">{userData.weight ? `${userData.weight} kg` : 'Not added'}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Height</span>
                    <span className="stat-value">
                      {(userData.heightFeet !== null && userData.heightFeet !== undefined && userData.heightFeet !== '') && 
                       (userData.heightInches !== null && userData.heightInches !== undefined && userData.heightInches !== '')
                        ? `${userData.heightFeet}'${userData.heightInches}"` 
                        : 'Not added'}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Recovery Email</span>
                    <span className="stat-value">{userData.recoveryEmail || 'Not added'}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Ayushman Card</span>
                    <span className="stat-value">{userData.ayushmanCard || 'Not linked'}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Location</span>
                    <span className="stat-value">{userData.address ? userData.address.split(',')[0] : 'Not added'}</span>
                  </div>
                </div>
              </div>
              
              <div className="profile-actions">
                <button onClick={handleEditClick} className="auth-submit-btn profile-btn-primary">
                  Edit Profile
                </button>
                <button onClick={handleLogout} className="auth-submit-btn profile-btn-secondary">
                  Logout
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Start;
