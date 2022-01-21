import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
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
              <span className='perk-text'>Pet Friendly Home</span>
              </div>
            <div className='perk'>
              <div className='perk-icon'><FontAwesomeIcon icon={faSnowflake} /></div>
              <span className='perk-text'>Air Conditioning</span>
            </div>
            <div className='perk'>
              <div className='perk-icon'><FontAwesomeIcon icon={faTree} /></div>
              <span className='perk-text'>Hardwood Floors</span>
            </div>
          </div>
          <div id="property-description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
          </div>
        <div id="price-box">
          <div id="monthly-rent"></div>
          <div id="property-deposit"></div>
          <div id="pet-fees"></div>
          <div id="average-utility-cost"></div>
        </div>
          <div id="map-container">
            <div id="map-headline">Where you're home will be</div>
            <div id="map"></div>
            <div id="map-location"></div>
            <div id="map-location-description"></div>
          </div>
          <div id="things-to-know">
            <div id="house-rules">

            </div>
            <div id="health-and-education">

            </div>
            <div id="leasing-information">

            </div>
          </div>
        </div>
        <NavLink to="/listings">All Listings</NavLink>
        <NavLink to="/">Landing Page</NavLink>
        <Footer />
    </div>
  );
}

export default Listing;
