import React from 'react';
import "../components/Style.css"

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '170vh', // This ensures the content is centered vertically
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to MedTech</h1>
      <h5>Here you can create an account or log in</h5>
    </div>
  );
};

export default Home;

