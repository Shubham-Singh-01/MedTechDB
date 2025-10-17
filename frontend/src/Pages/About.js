import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1 className="page-title">About MedTechDB: Secure Healthcare Web Application</h1>
        <div className="page-content">
          <p>
            Welcome to MedTechDB, a secure healthcare web application designed and developed using React, Node.js, and MongoDB to enhance emergency care and patient data management. Our platform streamlines healthcare operations and ensures seamless access to critical medical information for healthcare providers.
          </p>
          <p>
            At MedTechDB, we understand the critical importance of quick access to patient information during emergencies. That's why we've built a platform that revolutionizes healthcare access and emergency response, making it easier for medical professionals to provide the best possible care.
          </p>
          <h2>Why Choose MedTechDB?</h2>
          <ul>
            <li>
              <strong>Instant Patient Identification:</strong> Through fingerprint recognition or Aadhaar/Ayushman integration, healthcare providers can instantly identify patients and access their medical history, ensuring rapid emergency response.
            </li>
            <li>
              <strong>Automated Claim Approvals:</strong> Our platform ensures hospitals can perform emergency operations without financial delays. Automated claim processing eliminates bureaucratic barriers during critical moments.
            </li>
            <li>
              <strong>Centralized Prescription History:</strong> Doctors gain immediate access to patients' past treatments and medical history, preventing redundant procedures and supporting informed decision-making.
            </li>
            <li>
              <strong>Privacy and Security:</strong> Your data security is our top priority. We employ end-to-end encryption and strict privacy policies to ensure that all personal and medical information remains confidential and protected.
            </li>
            <li>
              <strong>Accessibility for All:</strong> MedTechDB features an inclusive design that ensures every individual, regardless of their background or circumstances, can access quality healthcare services.
            </li>
          </ul>
          <h2>Technology Stack</h2>
          <p>
            MedTechDB is built using modern, reliable technologies to ensure performance, security, and scalability:
          </p>
          <ul>
            <li><strong>Frontend:</strong> React 18.2.0, React Router, Bootstrap 5</li>
            <li><strong>Backend:</strong> Node.js, Express 4.18.2, MongoDB 5.0</li>
            <li><strong>Additional Technologies:</strong> Web3.js, Truffle for blockchain integration</li>
          </ul>
          <p>
            Join us in our mission to revolutionize healthcare access and emergency response. Whether you're a healthcare provider seeking efficient patient data management or a patient wanting secure access to your medical records, MedTechDB is here to support you every step of the way.
          </p>
          <p>
            Experience the difference with MedTechDB - where secure healthcare information management meets emergency care excellence!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;