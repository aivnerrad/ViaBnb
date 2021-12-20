import React from 'react';
import { NavLink } from 'react-router-dom';

const Listing = () => {
  return (
    <div>
      <h1>Listing Page</h1>
      <NavLink to="/listings">All Listings</NavLink>
      <NavLink to="/">Landing Page</NavLink>
    </div>
  );
}

export default Listing;
