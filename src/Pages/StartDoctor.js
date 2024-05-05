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
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              handleCancelClick={handleCancelClick}
            />
          ) : (
            <div className="profile-box">
              <h1>Welcome Doctor</h1>
              <p>Name: {doctorData.name}</p>
              <p>Email: {doctorData.email}</p>
              {/* Display other doctor data */}
              <div className="profile-actions">
                <button onClick={handleEditClick} className="btn btn-primary">
                  Edit Profile
                </button>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
                <div className="retrieve-patient-section">
                  <h2>Retrieve Patient Details</h2>
                  <div className="form-group">
                    <label htmlFor="aadhaarSearch">
                      Enter Aadhaar Card Number:
                    </label>
                    <input
                      type="number"
                      id="aadhaarSearch"
                      name="aadhaarSearch"
                      value={aadhaarSearch}
                      onChange={(e) => setaadhaarSearch(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobileSearch">Enter Mobile Number:</label>
                    <input
                      type="text"
                      id="mobileSearch"
                      name="mobileSearch"
                      value={mobileSearch}
                      onChange={(e) => setMobileSearch(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <button
                    onClick={handleRetrieveUserDetails}
                    className="btn btn-primary"
                  >
                    Retrieve Patient Details
                  </button>

                  {userData && <UserDetailsPage userData={userData} />}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StartDoctor;
