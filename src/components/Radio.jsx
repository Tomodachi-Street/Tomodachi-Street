import React from 'react';
import '../Styles/Radio.css';

const Radio = ({ nav }) => {
  return (
    <div className="radio">
      <p>Currently viewing: <strong>{nav}</strong></p>
    </div>
  );
};

export default Radio;