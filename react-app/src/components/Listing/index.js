import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Listing Page</h1>
      <NavLink to="/landing-page">Landing Page</NavLink>
    </div>
  );
}

export default LandingPage;
