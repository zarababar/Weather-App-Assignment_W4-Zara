import React from 'react';
import './UnitSelector.css'; // Import the CSS file for styling

const UnitSelector = ({ onUnitChange }) => {
  return (
    <div className="unit-selector">
      <label>
        <input
          type="radio"
          name="unit"
          value="metric"
          onClick={() => onUnitChange('metric')}
          defaultChecked
        />
        Metric (°C)
      </label>
      <label>
        <input
          type="radio"
          name="unit"
          value="imperial"
          onClick={() => onUnitChange('imperial')}
        />
        Imperial (°F)
      </label>
      <label>
        <input
          type="radio"
          name="unit"
          value="standard"
          onClick={() => onUnitChange('standard')}
        />
        Standard (K)
      </label>
    </div>
  );
};

export default UnitSelector;
