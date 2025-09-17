//Contact.js
import React from "react";
import './Style.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1 className="page-title">Contact Us</h1>
        <div className="page-content">
          <h3>Contact Details:</h3>
          <ul>
            <li>
              <strong>Email:</strong> yourmedtech@example.com
            </li>
            <li>
              <strong>Phone:</strong> +1234567890
            </li>
            <li>
              <strong>Address:</strong> A-45, Vasant Kunj, Delhi, India, 110070.
            </li>
          </ul>
          
          <div className="contact-form">
            <h3>Email Us:</h3>
            <form>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
