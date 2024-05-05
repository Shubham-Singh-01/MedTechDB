import React, { useState } from "react";

const EditProfileForm = ({
  formData,
  setFormData,
  handleSubmit,
  handleCancelClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

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
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="start-container">
      <div className="content">
        {currentPage === 1 && (
          <form className="form" onSubmit={handleFormSubmit}>
            <h1>Edit Profile (Page 1)</h1>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="form-control"
                disabled
              />
            </div>
            {/* Add additional fields for gender and recoveryEmail */}
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender || ""}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="recoveryEmail">Recovery Email:</label>
              <input
                type="email"
                id="recoveryEmail"
                name="recoveryEmail"
                value={formData.recoveryEmail || ""}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob || ""}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group form-buttons">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={nextPage}
              >
                Next
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => {
                  handleCancel();
                  handleCancelClick();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        {currentPage === 2 && (
          <form className="form" onSubmit={handleFormSubmit}>
            <h1>Edit Profile (Page 2)</h1>
            <div className="form-group">
              <label htmlFor="photo">Photo:</label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.files[0],
                  })
                }
                className="form-control-file"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group:</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="form-control"
              >
                <option value="">Select</option>
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
            <div className="form-group">
              <label htmlFor="height">Height (Feet/Inches):</label>
              <div className="form-row">
                <div className="col">
                  <input
                    type="number"
                    id="heightFeet"
                    name="heightFeet"
                    value={formData.heightFeet || ""}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Feet"
                    min="0"
                    max="8"
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    id="heightInches"
                    name="heightInches"
                    value={formData.heightInches || ""}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Inches"
                    min="0"
                    max="11"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight (KG):</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="form-control"
                min="1"
                max="150"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone1">Primary Phone:</label>
              <input
                type="tel"
                id="phone1"
                name="phone1"
                value={formData.phone1 || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="form-control"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone2">Secondary Phone:</label>
              <input
                type="tel"
                id="phone2"
                name="phone2"
                value={formData.phone2 || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="form-control"
                pattern="[0-9]{10}"
                maxLength="10"
              />
            </div>
            <div className="form-group form-buttons">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={prevPage}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={nextPage}
              >
                Next
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => {
                  handleCancel();
                  handleCancelClick();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        {currentPage === 3 && (
          <form className="form" onSubmit={handleFormSubmit}>
            <h1>Edit Profile (Page 3)</h1>
            <div className="form-group">
              <label htmlFor="aadhaarCard">Aadhaar Card Number:</label>
              <input
                type="number"
                id="aadhaarCard"
                name="aadhaarCard"
                value={formData.aadhaarCard || ""}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ayushmanCard">Ayushman Card:</label>
              <input
                type="text"
                id="ayushmanCard"
                name="ayushmanCard"
                value={formData.ayushmanCard || ""}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="permanentAddress">Permanent Address:</label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress || ""}
                onChange={handleInputChange}
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group form-buttons">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={prevPage}
              >
                Back
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProfileForm;
