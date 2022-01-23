import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import GoogleMapComponent from '../Map';
import { faDog, faSnowflake, faTree } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./1000+ListingPage.css"

const Listing = () => {
  return (
    <div id="listing-page">
      <div id="property-information">
        <div id="property-title"><span>Example Property Title</span></div>
        <div id="property-location"><span>City, State</span></div>
      </div>
      <div id="images-container">
        <div id="main-image" style={{"backgroundImage": "url(/images/mock-home1.webp"}}></div>
        <div id="remaining-images">
          <div id="top-left-image" style={{"backgroundImage": "url(/images/mock-home2.webp)"}}></div>
          <div id="top-right-image"  style={{"backgroundImage": "url(/images/mock-home3.webp)"}}></div>
          <div id="bottom-left-image" style={{"backgroundImage": "url(/images/mock-home4.webp)"}}></div>
          <div id="bottom-right-image" style={{"backgroundImage": "url(/images/mock-home5.webp)"}}></div>
        </div>
      </div>
      <div id="property-details-and-price-container">
        <div id="property-details">
          <div id="detailed-information">
            <div id="information-top-section">
              <div id="description-headline"><span>Property rented by ViaBnb</span></div>
              <div id="property-rooms">3 bedrooms, 2 bathrooms</div>
              <div id="owner-image" style={{"backgroundImage": "url(/favicon.ico)"}}></div>
            </div>
            <div id="property-perks">
              <div className='perk'>
                <div className='perk-icon'><FontAwesomeIcon icon={faDog} /></div>
                <div className='perk-text-box'>
                  <span className='perk-title'>Pet Friendly Home</span>
                  <span className='perk-description'>The yard is huge. Plenty of room for the doggos to run.</span>
                </div>
              </div>
              <div className='perk'>
                <div className='perk-icon'><FontAwesomeIcon icon={faSnowflake} /></div>
                <div className='perk-text-box'>
                  <span className='perk-title'>Air Conditioning</span>
                  <span className='perk-description'>Hot Summer days are no problem. The central A/C unit is efficient, and keeps the house cool.</span>
                </div>
              </div>
              <div className='perk'>
                <div className='perk-icon'><FontAwesomeIcon icon={faTree} /></div>
                <div className='perk-text-box'>
                  <span className='perk-title'>Hardwood Floors</span>
                  <span className='perk-description'>Sleek design. Perfectly accents the home decor.</span>
                </div>
              </div>
            </div>
            <div id="property-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            </div>
          </div>
          <div id="slider-container">
            <div id="price-box">
              <div id="website-icon" style={{"backgroundImage": "url(/favicon.ico)"}}></div>
              <div className='move-in-bill' id="monthly-rent">$999/Month</div>
              <div className='move-in-bill' id="property-deposit">Security Deposit: $999 Deposit</div>
              <div className='move-in-bill' id="pet-fees">Pet Deposit: $250 per pet</div>
              <div className='move-in-bill' id="average-utility-cost">Average Utility Cost: 176$/month</div>
              <div className='move-in-bill' id="move-in-cost">Move In Cost: $2000 </div>
            </div>
          </div>
        </div>
          <div>
            <div id="map-information">
              <div id="map-headline">Where your home will be</div>
              <div id="map-location">City, State</div>
            </div>
            <div id="map"><GoogleMapComponent center={{"lat":39.4562, "lng":-77.9369}} /></div>
            <div id="map-location-description"><span><strong>City, State</strong></span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
          </div>
        <Footer />
      </div>
  );
}

export default Listing;
