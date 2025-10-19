import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserDetailsPage.css';

const UserDetailsPage = () => {
  const { state } = useLocation();
  const { userData } = state || {};
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('personal');
  const [showImageModal, setShowImageModal] = useState(false);

  if (!userData) {
    return (
      <div className="page-container">
        <div className="user-details-page-container">
          <div className="auth-card profile-dashboard user-details-page">
            <div className="no-data-message">
              <p>No patient data available.</p>
              <button className="profile-btn-secondary" onClick={() => navigate('/StartDoctor')}>
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate('/StartDoctor');
  };

  const handleDraftCase = () => {
    // Navigate to case drafting page or open modal
    navigate('/draft-case', { state: { patientData: userData } });
  };

  const handleAccessDrive = () => {
    // Open drive folder in new tab or navigate to prescriptions
    window.open(`/prescriptions/${userData._id}`, '_blank');
  };

  const handleContactRelatives = () => {
    // Navigate to contacts page or open contact modal
    navigate('/patient-contacts', { state: { patientData: userData } });
  };

  const handleImageClick = () => {
    if (userData.photo) {
      setShowImageModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
  };

  // const handleEditPatient = () => {
  //   // Navigate to edit patient page
  //   navigate('/edit-patient', { state: { patientData: userData } });
  // };

  const handleViewHistory = () => {
    // Navigate to medical history page
    navigate('/medical-history', { state: { patientData: userData } });
  };

  const renderPersonalInfo = () => (
    <div className="info-section">
      <h3>Personal Information</h3>
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">Full Name</span>
          <span className="info-value">{userData.name || 'Not provided'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Gender</span>
          <span className="info-value">{userData.gender || 'Not specified'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Date of Birth</span>
          <span className="info-value">
            {userData.dob ? new Date(userData.dob).toLocaleDateString() : 'Not provided'}
          </span>
        </div>
        <div className="info-item">
          <span className="info-label">Email</span>
          <span className="info-value">{userData.email || 'Not provided'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Recovery Email</span>
          <span className="info-value">{userData.recoveryEmail || 'Not provided'}</span>
        </div>
      </div>
    </div>
  );

  const renderContactInfo = () => (
    <div className="info-section">
      <h3>Contact & Address Information</h3>
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">Primary Phone</span>
          <span className="info-value">{userData.phone1 || 'Not provided'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Secondary Phone</span>
          <span className="info-value">{userData.phone2 || 'Not provided'}</span>
        </div>
        <div className="info-item full-width">
          <span className="info-label">Current Address</span>
          <span className="info-value">{userData.address || 'Not provided'}</span>
        </div>
        <div className="info-item full-width">
          <span className="info-label">Permanent Address</span>
          <span className="info-value">{userData.permanentAddress || 'Not provided'}</span>
        </div>
      </div>
    </div>
  );

  const renderMedicalInfo = () => (
    <div className="info-section">
      <h3>Medical Information</h3>
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">Blood Group</span>
          <span className="info-value">{userData.bloodGroup || 'Not specified'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Height</span>
          <span className="info-value">
            {(userData.heightFeet !== null && userData.heightFeet !== undefined && userData.heightFeet !== '') && 
             (userData.heightInches !== null && userData.heightInches !== undefined && userData.heightInches !== '')
              ? `${userData.heightFeet}' ${userData.heightInches}"` 
              : 'Not provided'}
          </span>
        </div>
        <div className="info-item">
          <span className="info-label">Weight</span>
          <span className="info-value">{userData.weight ? `${userData.weight} kg` : 'Not provided'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Ayushman Card</span>
          <span className="info-value">{userData.ayushmanCard || 'Not provided'}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Aadhaar Card</span>
          <span className="info-value">{userData.aadhaarCard || 'Not provided'}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="user-details-page-container">
        <div className="auth-card profile-dashboard user-details-page">
          <div className="page-header">
            <h1>Patient Details</h1>
            <button className="profile-btn-secondary" onClick={handleBackClick}>
              ← Back to Dashboard
            </button>
          </div>

          <div className="desktop-layout">
            {/* Left Side - Patient Information */}
            <div className="patient-info-panel">
              {/* Patient Header */}
              <div className="patient-header">
                <div className="patient-avatar" onClick={handleImageClick}>
                  {userData.photo ? (
                    <img src={userData.photo} alt={userData.name} className="patient-photo" />
                  ) : (
                    <div className="patient-initials">
                      {userData.name ? userData.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U'}
                    </div>
                  )}
                </div>
                <div className="patient-info">
                  <h2>{userData.name || 'Unknown Patient'}</h2>
                  <p className="patient-id">Patient ID: {userData._id || 'N/A'}</p>
                </div>
              </div>

              {/* Section Navigation */}
              <div className="section-navigation">
                <button 
                  className={`section-btn ${activeSection === 'personal' ? 'active' : ''}`}
                  onClick={() => setActiveSection('personal')}
                >
                  Personal Information
                </button>
                <button 
                  className={`section-btn ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveSection('contact')}
                >
                  Contact & Address
                </button>
                <button 
                  className={`section-btn ${activeSection === 'medical' ? 'active' : ''}`}
                  onClick={() => setActiveSection('medical')}
                >
                  Medical Information
                </button>
              </div>

              {/* Information Display */}
              <div className="info-display">
                {activeSection === 'personal' && renderPersonalInfo()}
                {activeSection === 'contact' && renderContactInfo()}
                {activeSection === 'medical' && renderMedicalInfo()}
              </div>
            </div>

            {/* Right Side - Actions and Controls */}
            <div className="actions-panel">
              <h3>Medical Actions</h3>
              
              <div className="action-group">
                <h4>Case Management</h4>
                <div className="action-buttons-grid">
                  <button className="action-btn primary" onClick={handleDraftCase}>
                    Draft New Case
                  </button>
                  <button className="action-btn secondary" onClick={handleViewHistory}>
                    View Medical History
                  </button>
                </div>
              </div>

              <div className="action-group">
                <h4>Quick Stats</h4>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Age</span>
                    <span className="stat-value">
                      {userData.dob ? 
                        Math.floor((new Date() - new Date(userData.dob)) / (365.25 * 24 * 60 * 60 * 1000)) 
                        : 'N/A'} years
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Blood Type</span>
                    <span className="stat-value">{userData.bloodGroup || 'Unknown'}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">BMI</span>
                    <span className="stat-value">
                      {(userData.weight && userData.weight !== null && userData.weight !== undefined) && 
                       (userData.heightFeet !== null && userData.heightFeet !== undefined) && 
                       (userData.heightInches !== null && userData.heightInches !== undefined) ? 
                        (userData.weight / Math.pow((userData.heightFeet * 12 + userData.heightInches) * 0.0254, 2)).toFixed(1)
                        : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="action-group">
                <h4>Resources</h4>
                <div className="action-buttons-grid">
                  <button className="action-btn info" onClick={handleAccessDrive}>
                    Access Prescriptions
                  </button>
                  <button className="action-btn info" onClick={handleContactRelatives}>
                    Contact Information
                  </button>
                  <button className="action-btn info" onClick={() => alert('Download Reports')}>
                    Download Reports
                  </button>
                  <button className="action-btn info" onClick={() => alert('Emergency Contacts')}>
                    Emergency Contacts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Image Modal */}
      {userData.photo && (
        <div className={`patient-image-modal ${showImageModal ? 'active' : ''}`} onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <img 
              src={userData.photo} 
              alt={userData.name} 
              className="modal-image" 
            />
            <div className="modal-patient-info">
              <h3>{userData.name || 'Unknown Patient'}</h3>
              <p>Patient ID: {userData._id || 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;