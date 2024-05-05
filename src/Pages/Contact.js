import React from "react";

const About = () => {
  return (
    <div
      className="my-5 bg-blur d-flex justify-content-center align-items-center"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      <div
        className="container py-5"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "left",
          maxWidth: "850px",
          minHeight: "650px",
        }}
      >
        <div className="row justify-content-center" >
          <div className="col-md-10">
            <div className="card bg-transparent border-0">
              <div className="card-body text-black">
                <h1 className="card-title text-center mb-4">Contact Us</h1>
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
              </div>
              <div className="col-md-6" >
                <h3>Email Us:</h3>
                <form>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label htmlFor="email">Your Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button  type="submit" className="btn btn-primary" >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
