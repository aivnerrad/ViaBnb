import React from 'react';
import { NavLink } from 'react-router-dom';
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div id="landing-page">
      <h1>Landing Page</h1>
      <div id="landing-image" style={{"background-image" : "url('./images/home.jpg')"}}></div>
      <NavLink to="/listings">Listings Page</NavLink>
    </div>
  );
}

export default LandingPage;
