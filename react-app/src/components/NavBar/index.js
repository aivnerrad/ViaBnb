
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'
const NavBar = () => {
  const user = useSelector(state => state.session.user)

  const dropdownMenu = (
    <ul>
      {!user && (
      <>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
      </>
      )}
      {user && (
      <li>
        <LogoutButton />
      </li>
      )}
    </ul>

  )
  return (
    <nav>
      <NavLink id="home-button" to='/' exact={true} activeClassName='active'>
        ViaBnb
      </NavLink>
      <div id="profile-button">
        <FontAwesomeIcon icon="fa-thin fa-bars" />
      </div>
    </nav>
  );
}

export default NavBar;
