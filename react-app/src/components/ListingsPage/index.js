import React from 'react';
import { NavLink } from 'react-router-dom';

const ListingsPage = () => {
  return (
    <div>
      <h1>Listings Page</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/listings/1">Listing Page</NavLink>
    </div>
  );
}

export default ListingsPage;
