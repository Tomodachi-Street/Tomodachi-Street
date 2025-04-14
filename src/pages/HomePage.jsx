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
            For those who want meet new people with similar Interests. Tomodachi Streets is always 
            hosting fun events and activities to help you make new friends. Whether you're looking 
            for a new social group, or a group your current friends can join, Tomodachi Street is 
            the place for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
