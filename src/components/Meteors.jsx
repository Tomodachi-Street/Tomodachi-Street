import React, { useEffect, useState } from 'react';
import '../styles/Meteors.scss';

const Meteors = () => {
  const numberOfMeteors = 15;

  // Store meteor positions calculated only once
  const [meteorPositions] = useState(() =>
    Array.from({ length: numberOfMeteors }, () => ({
      top: Math.random() * 250 + 50, // Random vertical position
      left: Math.random() * 90 + 5, // Random horizontal position
    }))
  );

  useEffect(() => {
    const meteorContainer = document.querySelector('.meteor-container');
    if (!meteorContainer) {
      console.error('Meteor container not found!');
      return;
    }

    // Create meteors dynamically
    meteorPositions.forEach((position, i) => {
      const meteor = document.createElement('div');
      meteor.className = `meteor meteor-${i}`;
      meteor.style.top = `${position.top}px`;
      meteor.style.left = `${position.left}vw`;
      meteorContainer.appendChild(meteor);
    });

    // Cleanup on component unmount
    return () => {
      meteorContainer.innerHTML = '';
    };
  }, [meteorPositions]);

  return <div className="meteor-container"></div>;
};

export default Meteors;