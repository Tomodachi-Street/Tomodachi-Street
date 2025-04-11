import React from 'react';
import '../Styles/TeamPage.css';

const TeamPage = () => {
  return (
    <div>
        <div class="row justify-content-center mb-4">
            <div class="col">
                <h2 class="h1 text-uppercase text-white text-center">Meet the Team</h2>
            </div>
        </div>

        <div class="row text-center justify-content-center">
            <div class="col-md-3 team-card-wrapper">
                <a href="https://instagram.com/mx.cyberagent" target="_blank" class="team-card">
                    <img src="/img/team-member1.jpg" alt="Derrick" class="rounded-circle team-img" />
                    <h3 class="team-name">DERRICK</h3>
                    <p class="team-role">Chief Technical Officer</p>
                    <p class="team-social">@mx.cyberagent</p>
                </a>
            </div>
            <div class="col-md-3 team-card-wrapper">
                <a href="https://instagram.com/auracaptor" target="_blank" class="team-card">
                    <img src="/img/team-member2.jpg" alt="Jon" class="rounded-circle team-img" />
                    <h3 class="team-name">JON</h3>
                    <p class="team-role">Chief Communication Officer</p>
                    <p class="team-social">@auracaptor</p>
                </a>
            </div>
        </div>
    </div>
  );
};

export default TeamPage;
