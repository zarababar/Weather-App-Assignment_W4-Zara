import React from 'react';
import weatherLogo from '../../assets/weather.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={weatherLogo} alt="Weather Logo" className="header-logo" />
      <h1 className="header-title">Weather Forecast App</h1>
    </div>
  );
};

export default Header;
