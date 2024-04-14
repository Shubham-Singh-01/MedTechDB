import React from 'react';

const About = () => {
  return (
    <div className="my-5 bg-blur" style={{maxWidth: "1500px"}}>
      <div className="container py-5" style={{ minHeight: "120vh"}}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card bg-transparent border-0">
              <div className="card-body text-black">
                <h1 className="card-title text-center mb-4">About MedTech: Revolutionizing Healthcare Information Sharing</h1>
                <p>
                  Welcome to MedTech, where we're on a mission to revolutionize healthcare information sharing. Our platform is designed to empower individuals by providing easy access to vital health information, prioritizing reproductive health and women's healthcare access, and ensuring privacy, security, and autonomy for all users.
                </p>
                <p>
                  At MedTech, we understand the challenges individuals face in accessing reliable healthcare information, particularly in underserved communities. That's why we're committed to bridging these gaps and empowering users to make informed decisions about their health and well-being.
                </p>
                <h2>Why Choose MedTech?</h2>
                <ul>
                  <li>
                    <strong>User-Friendly Platform:</strong> MedTech offers a user-friendly interface, making it easy for users to navigate and access the information they need quickly and efficiently.
                  </li>
                  <li>
                    <strong>Focus on Reproductive Health:</strong> We prioritize reproductive health and women's healthcare access, providing comprehensive resources and support to individuals seeking information and services in these areas.
                  </li>
                  <li>
                    <strong>Privacy and Security:</strong> Your privacy and security are our top priorities. We employ advanced encryption methods and strict privacy policies to ensure that your personal information remains confidential and protected at all times.
                  </li>
                  <li>
                    <strong>Empowerment of Underserved Communities:</strong> MedTech aims to empower underserved communities, particularly rural residents, by providing them with access to crucial health information and resources that may otherwise be inaccessible.
                  </li>
                  <li>
                    <strong>Commitment to Accessibility:</strong> We are committed to ensuring that our platform is accessible to all individuals, regardless of their background or circumstances. Our goal is to break down barriers to healthcare information and promote inclusivity and equality in access to health services.
                  </li>
                </ul>
                <p>
                  Join us in our mission to revolutionize healthcare information sharing. Whether you're looking to access reliable health information, prioritize reproductive health, or empower underserved communities, MedTech is here to support you every step of the way.
                </p>
                <p>
                  Experience the difference with MedTech - where healthcare information sharing is made easy, secure, and accessible for all!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;