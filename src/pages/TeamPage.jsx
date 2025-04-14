import React from 'react';
import '../Styles/TeamPage.css';

const TeamPage = () => {
  return (
    <div className="team-page">
      <div className="team-content">
        <div className="row justify-content-center mb-4">
          <div className="col">
            <h2 className="h1 text-uppercase text-white text-center">Meet the Team</h2>
          </div>
        </div>

        <div className="row text-center justify-content-center">
        <div className="team-card-wrapper col-md-3">
          <a href="https://instagram.com/mx.cyberagent" target="_blank" className="team-card text-decoration-none">
            <img src="/img/team-member1.jpg" alt="Derrick" className="rounded-circle team-img" />
            <h3 className="team-name">DERRICK</h3>
            <p className="team-role">Chief Technical Officer</p>
            <p className="team-social">@mx.cyberagent</p>
          </a>
        </div>
        <div className="team-card-wrapper col-md-3">
            <a href="https://instagram.com/auracaptor" target="_blank" className="team-card text-decoration-none">
              <img src="/img/team-member2.jpg" alt="Jon" className="rounded-circle team-img" />
              <h3 className="team-name">JON</h3>
              <p className="team-role">Chief Communication Officer</p>
              <p className="team-social">@auracaptor</p>
            </a>
          </div>
        </div>
      </div>

      <div className="team-logo-container">
        <img src="/img/logo.png" alt="Tomodachi Street Logo" className="team-logo" />
      </div>
    </div>
  );
};

export default TeamPage;