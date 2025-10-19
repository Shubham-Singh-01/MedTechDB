// EditProfileForm.js
import React, { useState, useEffect } from "react";
import "./EditProfileForm.css";

const EditProfileForm = ({
  formData,
  setFormData,
  handleSubmit,
  handleCancelClick,
  userType = 'user', // Add userType prop with default value
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isDoctorForm = userType === 'doctor';
  const totalPages = isDoctorForm ? 4 : 3; // Add an extra page for doctors

  // Prevent body scrolling when form is mounted
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleCancel = () => {
    setCurrentPage(1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const getProgressPercentage = () => {
    return (currentPage / totalPages) * 100;
  };

  const renderPageIndicator = () => {
    return (
      <div className="page-indicator">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <div
              key={page}
              className={`page-dot ${
                page === currentPage ? 'active' : page < currentPage ? 'completed' : ''
              }`}
              onClick={() => setCurrentPage(page)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <div className="edit-progress-container">
          <div 
            className="edit-progress-bar"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
        
        {renderPageIndicator()}
        
        <h1 className="edit-profile-title">
          Edit Profile - Step {currentPage} of {totalPages}
        </h1>
        {currentPage === 1 && (
          <form onSubmit={handleFormSubmit}>
            <div className="edit-form-group">
              <label htmlFor="name" className="edit-form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                className="edit-form-control"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="edit-form-group">
              <label htmlFor="email" className="edit-form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                className="edit-form-control"
                placeholder="your.email@example.com"
                disabled
              />
            </div>
            
            <div className="edit-form-row">
              <div className="edit-form-group">
                <label htmlFor="gender" className="edit-form-label">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="edit-form-group">
                <label htmlFor="dob" className="edit-form-label">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                />
              </div>
            </div>
            
            <div className="edit-form-group">
              <label htmlFor="recoveryEmail" className="edit-form-label">Recovery Email</label>
              <input
                type="email"
                id="recoveryEmail"
                name="recoveryEmail"
                value={formData.recoveryEmail || ""}
                onChange={handleInputChange}
                className="edit-form-control"
                placeholder="recovery@example.com"
              />
            </div>
            
            <div className="edit-form-group">
              <label htmlFor="address" className="edit-form-label">Current Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address || ""}
                onChange={handleInputChange}
                className="edit-form-control textarea"
                rows="3"
                placeholder="Enter your current address"
              ></textarea>
            </div>
            
            <div className="edit-form-buttons">
              <div className="edit-action-buttons">
                <button
                  type="button"
                  className="edit-btn edit-btn-danger"
                  onClick={() => {
                    handleCancel();
                    handleCancelClick();
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="edit-nav-buttons">
                <button
                  type="button"
                  className="edit-btn edit-btn-primary"
                  onClick={nextPage}
                >
                  Next Step →
                </button>
              </div>
            </div>
          </form>
        )}
        {currentPage === 2 && (
          <form onSubmit={handleFormSubmit}>
            <div className="edit-form-group">
              <label htmlFor="photo" className="edit-form-label">Profile Photo</label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleInputChange}
                className="edit-file-input"
              />
            </div>
            
            <div className="edit-form-row">
              <div className="edit-form-group">
                <label htmlFor="bloodGroup" className="edit-form-label">Blood Group</label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              
              <div className="edit-form-group">
                <label htmlFor="weight" className="edit-form-label">Weight (KG)</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  min="1"
                  max="200"
                  placeholder="70"
                />
              </div>
            </div>
            
            <div className="edit-form-group">
              <label className="edit-form-label">Height</label>
              <div className="edit-form-row">
                <div className="edit-form-group">
                  <input
                    type="number"
                    id="heightFeet"
                    name="heightFeet"
                    value={formData.heightFeet !== null && formData.heightFeet !== undefined ? formData.heightFeet : ""}
                    onChange={handleInputChange}
                    className="edit-form-control"
                    placeholder="Feet"
                    min="0"
                    max="8"
                  />
                </div>
                <div className="edit-form-group">
                  <input
                    type="number"
                    id="heightInches"
                    name="heightInches"
                    value={formData.heightInches !== null && formData.heightInches !== undefined ? formData.heightInches : ""}
                    onChange={handleInputChange}
                    className="edit-form-control"
                    placeholder="Inches"
                    min="0"
                    max="11"
                  />
                </div>
              </div>
            </div>
            
            <div className="edit-form-row">
              <div className="edit-form-group">
                <label htmlFor="phone1" className="edit-form-label">Primary Phone *</label>
                <input
                  type="tel"
                  id="phone1"
                  name="phone1"
                  value={formData.phone1 || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  placeholder="1234567890"
                  required
                />
              </div>
              
              <div className="edit-form-group">
                <label htmlFor="phone2" className="edit-form-label">Secondary Phone</label>
                <input
                  type="tel"
                  id="phone2"
                  name="phone2"
                  value={formData.phone2 || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  placeholder="0987654321"
                />
              </div>
            </div>
            
            <div className="edit-form-buttons">
              <div className="edit-nav-buttons">
                <button
                  type="button"
                  className="edit-btn edit-btn-secondary"
                  onClick={prevPage}
                >
                  ← Previous
                </button>
              </div>
              <div className="edit-action-buttons">
                <button
                  type="button"
                  className="edit-btn edit-btn-danger"
                  onClick={() => {
                    handleCancel();
                    handleCancelClick();
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="edit-btn edit-btn-primary"
                  onClick={nextPage}
                >
                  Next Step →
                </button>
              </div>
            </div>
          </form>
        )}
        {currentPage === 3 && (
          <form onSubmit={handleFormSubmit}>
            <div className="edit-form-row">
              <div className="edit-form-group">
                <label htmlFor="aadhaarCard" className="edit-form-label">Aadhaar Card Number</label>
                <input
                  type="text"
                  id="aadhaarCard"
                  name="aadhaarCard"
                  value={formData.aadhaarCard || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  pattern="[0-9]{12}"
                  maxLength="12"
                  placeholder="123456789012"
                />
              </div>
              
              <div className="edit-form-group">
                <label htmlFor="ayushmanCard" className="edit-form-label">Ayushman Card</label>
                <input
                  type="text"
                  id="ayushmanCard"
                  name="ayushmanCard"
                  value={formData.ayushmanCard || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  placeholder="Enter Ayushman Card details"
                />
              </div>
            </div>
            
            <div className="edit-form-group">
              <label htmlFor="permanentAddress" className="edit-form-label">Permanent Address</label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress || ""}
                onChange={handleInputChange}
                className="edit-form-control textarea"
                rows="4"
                placeholder="Enter your permanent address..."
              ></textarea>
            </div>
            
            <div className="edit-form-buttons">
              <div className="edit-nav-buttons">
                <button
                  type="button"
                  className="edit-btn edit-btn-secondary"
                  onClick={prevPage}
                >
                  ← Previous
                </button>
              </div>
              <div className="edit-action-buttons">
                <button
                  type="button"
                  className="edit-btn edit-btn-danger"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                {isDoctorForm ? (
                  <button
                    type="button"
                    className="edit-btn edit-btn-primary"
                    onClick={nextPage}
                  >
                    Next Step →
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="edit-btn edit-btn-primary"
                  >
                    Save Profile ✓
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
        {isDoctorForm && currentPage === 4 && (
          <form onSubmit={handleFormSubmit}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', textAlign: 'center', color: '#1a252f' }}>
              Professional Information
            </h2>
            
            <div className="edit-form-row">
              <div className="edit-form-group">
                <label htmlFor="specialization" className="edit-form-label">Specialization</label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  value={formData.specialization || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  placeholder="e.g., Cardiology, Neurology"
                />
              </div>
              
              <div className="edit-form-group">
                <label htmlFor="licenseNumber" className="edit-form-label">Medical License Number</label>
                <input
                  type="text"
                  id="licenseNumber"
                  name="licenseNumber"
                  value={formData.licenseNumber || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  placeholder="e.g., MCI123456"
                />
              </div>
            </div>
            
            <div className="edit-form-row">
              <div className="edit-form-group">
                <label htmlFor="experience" className="edit-form-label">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  placeholder="10"
                  min="0"
                  max="60"
                />
              </div>
              
              <div className="edit-form-group">
                <label htmlFor="hospital" className="edit-form-label">Hospital / Clinic Name</label>
                <input
                  type="text"
                  id="hospital"
                  name="hospital"
                  value={formData.hospital || ""}
                  onChange={handleInputChange}
                  className="edit-form-control"
                  placeholder="e.g., City Medical Center"
                />
              </div>
            </div>
            
            <div className="edit-form-buttons">
              <div className="edit-nav-buttons">
                <button
                  type="button"
                  className="edit-btn edit-btn-secondary"
                  onClick={prevPage}
                >
                  ← Previous
                </button>
              </div>
              <div className="edit-action-buttons">
                <button
                  type="button"
                  className="edit-btn edit-btn-danger"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="edit-btn edit-btn-primary"
                >
                  Save Profile ✓
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProfileForm;
