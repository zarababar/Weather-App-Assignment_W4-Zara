import React from 'react';
import './Loader.css'; // Ensure you create this CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="cloud-loader">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loader;
