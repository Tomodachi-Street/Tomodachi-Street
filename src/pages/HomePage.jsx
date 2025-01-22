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
            Home for some of the best meetup and hangout events in the DMV!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
