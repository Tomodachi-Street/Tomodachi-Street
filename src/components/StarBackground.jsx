import React, { useEffect } from 'react';
import '../styles/StarBackground.scss';

const StarBackground = () => {
  useEffect(() => {
    const starBackground = document.querySelector('.star-background');
    if (!starBackground) return;

    // Generate 100 stars dynamically
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = `${Math.random() * 2 + 1}px`;
      starBackground.appendChild(star);
    }

    // Cleanup stars when the component unmounts
    return () => {
      if (starBackground) starBackground.innerHTML = '';
    };
  }, []);

  return <div className="star-background"></div>;
};

export default StarBackground;
