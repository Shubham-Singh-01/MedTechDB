import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserDetailsForm = ({ userData }) => {
    if (!userData) {
      return <div>No user data available.</div>;
    }
  return (
    <div className="user-details-form">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={userData.name}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={userData.email}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <input
          type="text"
          value={userData.gender}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <textarea
          value={userData.address}
          disabled
          className="form-control"
          rows="3"
        />
      </div>
      <div className="form-group">
        <label>Permanent Address:</label>
        <textarea
          value={userData.permanentAddress}
          disabled
          className="form-control"
          rows="3"
        />
      </div>
      <div className="form-group">
        <label>Recovery Email:</label>
        <input
          type="email"
          value={userData.recoveryEmail}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Primary Phone:</label>
        <input
          type="tel"
          value={userData.phone1}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Secondary Phone:</label>
        <input
          type="tel"
          value={userData.phone2}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Ayushman Card:</label>
        <input
          type="text"
          value={userData.ayushmanCard}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Blood Group:</label>
        <input
          type="text"
          value={userData.bloodGroup}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Height (Feet/Inches):</label>
        <div className="form-row">
          <div className="col">
            <input
              type="number"
              value={userData.heightFeet}
              disabled
              className="form-control"
              placeholder="Feet"
            />
          </div>
          <div className="col">
            <input
              type="number"
              value={userData.heightInches}
              disabled
              className="form-control"
              placeholder="Inches"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Weight (KG):</label>
        <input
          type="text"
          value={userData.weight}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Aadhaar Card:</label>
        <input
          type="number"
          value={userData.aadhaarCard}
          disabled
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Date of Birth:</label>
        <input
          type="date"
          value={userData.dob}
          disabled
          className="form-control"
        />
      </div>
      {userData.photo && (
        <div className="form-group">
          <label>Photo:</label>
          <img src={userData.photo} alt={userData.name} className="user-photo" />
        </div>
      )}
    </div>
  );
};

const UserDetailsPage = () => {
    const { state } = useLocation();
    const { userData } = state || {};
  
    const navigate = useNavigate();
  
    const handleBackClick = () => {
      navigate('/StartDoctor');
    };
  
    return (
      <div className="user-details-page">
        <h1>User Details</h1>
        {userData ? (
          <UserDetailsForm userData={userData} />
        ) : (
          <div>No user data available.</div>
        )}
        <button className="btn btn-primary" onClick={handleBackClick}>
          Back
        </button>
      </div>
    );
  };

export default UserDetailsPage;
