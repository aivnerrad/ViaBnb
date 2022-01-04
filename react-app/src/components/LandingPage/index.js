import React from 'react';
import { NavLink } from 'react-router-dom';
import "./LandingPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPeopleCarry, faSearch } from "@fortawesome/free-solid-svg-icons"

const LandingPage = () => {
  return (
    <>
      <div className='black'>
      </div>
        <div id="landing-page">
          <div id="search-bar-background">
            <div id="search-bar-inputs-container">
              <div className='hover-div'>
                <label className='search-bar-label'>Location</label>
                  <input type="text" placeholder='Where are you going?'></input>
              </div>
              <div className='hover-div'>
                <label className='search-bar-label'>Move in</label>
                <input type="text" placeholder='Add dates'></input>
              </div>
              <div className='hover-div'>
                <label className='search-bar-label'>Bedrooms</label>
                  <input type="text" placeholder='Bedrooms'></input>
              </div>
              <div className='hover-div'>
                <label className='search-bar-label'>Bathrooms</label>
                <input type="text" placeholder='Bathrooms'></input>
              </div>
              <div id="home-search-button"><FontAwesomeIcon icon={faSearch}/></div>
            </div>
          </div>
          <div id="landing-image" style={{"background-image" : "url(/images/home.jpg)"}}>
            <span id="landing-image-text">Not sure where your next home is? Perfect.</span>
            <div id="landing-image-button">
              <NavLink to="/listings" ><span id="landing-image-button-text">Take me home!</span></NavLink>
            </div>
          </div>
        </div>
        <div id="refer-a-friend-card">
          <div id="refer-text">
            <span id="introducing">Introducing</span>
            <h3 id="big-refer-text">Viabnb Referral Bonus</h3>
            <div id="refer-button">Look now!</div>
          </div>
          <div id="refer-icon">
            <FontAwesomeIcon id="people-carry-icon" icon={faPeopleCarry}/>
            <div id="shadow-div"></div>
          </div>
        </div>
      <div className='white'>
        <div className='city-card'></div>
        <div className='city-card'></div>
        <div className='city-card'></div>
        <div className='city-card'></div>
      </div>
    </>
  );
}

export default LandingPage;
