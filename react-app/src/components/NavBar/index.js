
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
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
        <img src="/favicon.ico" alt=''/>
        ViaBnb
      </NavLink>
      <div id="navbar-center">
        <div className='underline'>
          <div className='searchBarParameter'>Apartments</div>
        </div>
        <div className='underline'>
          <div className='searchBarParameter'>Houses</div>
        </div>
      </div>
      <div id="profile-button">
        <FontAwesomeIcon id="bars" icon={faBars} />
        <div id="user-icon-background">
          <FontAwesomeIcon id="user-icon" icon={faUser} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
