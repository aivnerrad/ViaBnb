import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <NavLink to="/listing-page">Listing Page</NavLink>
    </div>
  );
}

export default LandingPage;
