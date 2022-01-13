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
        <div className='property' style={{"backgroundImage": "url(/images/lakehouse.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/beachhouse.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/blue-apartment.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/blue-house.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/farm-house.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/florida-apartment.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/geometry-house.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/modern-apartment.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/field-house.jpg)"}}></div>
        <div className='property' style={{"backgroundImage": "url(/images/palm-tree-house.jpg)"}}></div>
      </div>
    </div>
  );
}

export default ListingsPage;
