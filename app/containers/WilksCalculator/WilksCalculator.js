import React from 'react';
import './style.scss';

export default function WilksCalculator() {
  return (
    <div className="wilks-calculator">
      <h1>Wilks Calculator.</h1>
      <div className="wilks-calculator_row">
        <div>Waga:</div><div>76kg</div>
      </div>
      <div className="wilks-calculator_row">
        <div>Podniesiony ciężar:</div><div>100kg</div>
      </div>
    </div>
  );
}
