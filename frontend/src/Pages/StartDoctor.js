import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./axios";
import EditProfileForm from "../Components/EditProfileForm";
import "./Style.css"; // Import CSS file
import UserDetailsPage from "./UserDetailsPage"; // Import the UserDetailsPage component

const StartDoctor = () => {
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [aadhaarSearch, setaadhaarSearch] = useState("");
  const [mobileSearch, setMobileSearch] = useState("");
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
    const fetchDoctorData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await api.get("/authdoctor/getdoctor");
        setDoctorData(response.data);
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
          dob: response.data.dob || "", // Add date of birth field
          photo: response.data.photo || "", // Add photo field
        });
      } catch (error) {
        setError("Error fetching doctor data");
        console.error("Error fetching doctor data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDoctorData();
  }, []);

  const handleLogout = () => {
    console.log("Logout button clicked");
    localStorage.removeItem("token");
    localStorage.removeItem("sessionToken");
    navigate("/LoginDoctor");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/authdoctor/updatedoctor", formData);
      console.log(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating doctor data:", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({
      name: doctorData.name,
      email: doctorData.email,
      gender: doctorData.gender || "",
      address: doctorData.address || "",
      permanentAddress: doctorData.permanentAddress || "",
      recoveryEmail: doctorData.recoveryEmail || "",
      phone1: doctorData.phone1 || "",
      phone2: doctorData.phone2 || "",
      ayushmanCard: doctorData.ayushmanCard || "",
      bloodGroup: doctorData.bloodGroup || "",
      heightFeet: doctorData.heightFeet || "", // Include heightFeet
      heightInches: doctorData.heightInches || "", // Include heightInches
      weight: doctorData.weight || "",
      aadhaarCard: doctorData.aadhaarCard || "",
      dob: doctorData.dob || "", // Add date of birth field
      photo: doctorData.photo || "", // Add photo field
    });
  };

  const handleRetrieveUserDetails = async () => {
    try {
      const response = await api.post("/authdoctor/getuserdetails", {
        aadhaarCard: aadhaarSearch,
        phone1: mobileSearch,
      });
      setUserData(response.data);
      navigate("/UserDetailsPage", { state: { userData: response.data } });
    } catch (error) {
      console.error("Error retrieving user details:", error);
    }
  };

  console.log("StartDoctor component rendered");

  return (
    <div className="auth-container">
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
            />
          ) : (
            <div className="auth-card profile-dashboard doctor-dashboard">
              <h1 className="auth-title">Welcome Doctor!</h1>
              
              <div className="doctor-layout">
                <div className="doctor-profile-section">
                  <div className="profile-info">
                    <div className="profile-header">
                      <div className="profile-avatar">
                        {doctorData.name ? doctorData.name.charAt(0).toUpperCase() : 'D'}
                      </div>
                      <div className="profile-details">
                        <h2>{doctorData.name}</h2>
                        <p className="profile-email">{doctorData.email}</p>
                      </div>
                    </div>
                    
                    <div className="profile-stats">
                      <div className="stat-item">
                        <span className="stat-label">Phone</span>
                        <span className="stat-value">{doctorData.phone1 || 'Not added'}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Specialization</span>
                        <span className="stat-value">{doctorData.specialization || 'Not specified'}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">License No.</span>
                        <span className="stat-value">{doctorData.licenseNumber || 'Not added'}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Experience</span>
                        <span className="stat-value">{doctorData.experience ? `${doctorData.experience} years` : 'Not added'}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Hospital</span>
                        <span className="stat-value">{doctorData.hospital || 'Not specified'}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Location</span>
                        <span className="stat-value">{doctorData.address ? doctorData.address.split(',')[0] : 'Not added'}</span>
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

                <div className="doctor-patient-section">
                  <div className="doctor-patient-search">
                    <h3 className="search-title">Patient Lookup</h3>
                    <div className="search-form">
                      <div className="auth-form-group">
                        <label htmlFor="aadhaarSearch" className="auth-form-label">
                          Aadhaar Card Number:
                        </label>
                        <input
                          type="number"
                          id="aadhaarSearch"
                          name="aadhaarSearch"
                          value={aadhaarSearch}
                          onChange={(e) => setaadhaarSearch(e.target.value)}
                          className="auth-form-control"
                          placeholder="Enter 12-digit Aadhaar number"
                        />
                      </div>
                      <div className="auth-form-group">
                        <label htmlFor="mobileSearch" className="auth-form-label">
                          Mobile Number:
                        </label>
                        <input
                          type="text"
                          id="mobileSearch"
                          name="mobileSearch"
                          value={mobileSearch}
                          onChange={(e) => setMobileSearch(e.target.value)}
                          className="auth-form-control"
                          placeholder="Enter 10-digit mobile number"
                        />
                      </div>
                      <button
                        onClick={handleRetrieveUserDetails}
                        className="auth-submit-btn patient-search-btn"
                      >
                        Search Patient
                      </button>
                    </div>
                  </div>

                  {userData && <UserDetailsPage userData={userData} />}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default StartDoctor;
