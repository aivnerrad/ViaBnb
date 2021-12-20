import React from 'react';
import { NavLink } from 'react-router-dom';
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className='black'>
        <div id="landing-page">
        <h1>Landing Page</h1>
        <div id="landing-image" style={{"background-image" : "url(/images/home.jpg)"}}>
          <span id="landing-image-text">Not sure where your next home is? Perfect.</span>
          <div id="landing-image-button">
            <NavLink to="/listings" ><span id="landing-image-button-text">Take me home!</span></NavLink>
          </div>
        </div>
      </div>
      <div className='white'>

      </div>
    </div>
  );
}

export default LandingPage;
