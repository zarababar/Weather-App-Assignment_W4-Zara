import React from 'react';
import './Error.css';

const ErrorComponent = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <div className="error-message">
        <h2>Something Went Wrong</h2>
        <p>{message || 'An unexpected error occurred. Please try again later.'}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
