import React from 'react';
import { NavLink } from 'react-router-dom';
import "./1000+ListingsPage.css"
const ListingsPage = () => {
  return (
    <div id="listings-page">
      <div id="filters-container">
        <div id="housing-types-container">
          <div className='housing-type'>Houses</div>
          <div className='housing-type'>Apartments</div>
          <div className='housing-type'>Townhouses</div>
          <div className='housing-type'>Condos</div>
        </div>
        <div id="housing-filters-container">
          <div className='housing-filter'>Bedrooms</div>
          <div className='housing-filter'>Bathrooms</div>
          <div className='housing-filter'>Price</div>
        </div>
      </div>
      <div id="properties-container">
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/lakehouse.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1400/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Mar '22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/beachhouse.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1275/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Apr' 22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/blue-apartment.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1075/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Jan' 22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/blue-house.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1350/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Mar' 22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/farm-house.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1800/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Feb' 22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/florida-apartment.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$980/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Apr' 22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/geometry-house.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1500/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Jan' 22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/modern-apartment.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1100/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Jan' 22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/field-house.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1700/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Jun' 22</div>
          </div>
        </div>
        <div className='property-image-and-details-container'>
          <div className='property-image' style={{"backgroundImage": "url(/images/palm-tree-house.jpg)"}}></div>
          <div className='property-details'>
            <div className='property-city'>City, State</div>
            <div className='property-price'>$1900/Month</div>
            <div className='property-distance'>999 Miles Away</div>
            <div className='property-available-date'>Jan' 22</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingsPage;
