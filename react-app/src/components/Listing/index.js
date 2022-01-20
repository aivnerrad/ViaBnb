import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import "./1000+ListingPage.css"

const Listing = () => {
  return (
    <div id="listing-page">
      <div id="property-information">
        <div id="property-title"><h3>Example Property Title</h3></div>
        <div id="property-location"><h3>City, State</h3></div>
      </div>
      <div id="images-container">
        <div id="main-image"></div>
        <div id="remaining-images">
          <div className="listing-property-image"></div>
          <div id="top-right-image" className="listing-property-image"></div>
          <div className="listing-property-image"></div>
          <div id="bottom-right-image" className="listing-property-image"></div>
        </div>
      </div>
      <div id="property-details">
        <div id="detailed-information">
          <div id="information-top-section">
            <div id="description-headline"></div>
            <div id="property-rooms">__ bedrooms __ bathrooms</div>
          </div>
          <div id="property-perks">
            <div className='perk'></div>
            <div className='perk'></div>
            <div className='perk'></div>
          </div>
          <div id="property-description"></div>
          <div id="amenities"></div>
        </div>
        <div id="price-box">
          <div id="monthly-rent"></div>
          <div id="property-deposit"></div>
          <div id="pet-fees"></div>
          <div id="average-utility-cost"></div>
        </div>
        <div id="reviews-section">
          <div id="property-rating-and-review-count"></div>
          <div id="property-rating-chart">
            <div className='property-rating-entry'>
              <div className='rating-name'></div>
              <div className='rating-bar'></div>
              <div className='rating-number'></div>
            </div>
          </div>
          <div id="property-review-container">
            <div id="property-review">
              <div id="reviewer-picture"></div>
              <div id="reviewer-name"></div>
              <div id="review-date"></div>
              <div id="review-text"></div>
            </div>
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
      </div>
      <NavLink to="/listings">All Listings</NavLink>
      <NavLink to="/">Landing Page</NavLink>
      <Footer />
    </div>
  );
}

export default Listing;
