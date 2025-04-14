import React from 'react';
import '../Styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="logo-container">
        <img src="/img/logo.png" alt="Tomodachi Street Logo" className="logo" />
      </div>
      <div className="text-container">
        <div className="card-body">
          <h1 className="text-uppercase text-white smaller text-center">
            Tomodachi Street
          </h1>
          <p>
          Established in 2024, Tomodachi Street is a DMV Community Based group that hosts events 
          through the local area within DC/MD/VA. Our interests cater to those who are into nerd 
          culture alongside exploring what the area has to offer. We invite anyone to partake into 
          our hosted events and network to find new friends!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
