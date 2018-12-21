import React from 'react';

import delete_button from './../../assets/delete_button.png';
import './House.css';

export default function House(props) {
  let { id, name, address, city, state, zip, image, mort, rent } = props.house;
  return (
    <div className='House'>
      <div className='house_detail_box'>
        <div className='house_img' style={{ backgroundImage: `url('${image}')` }}></div>
      </div>
      <div className='house_detail_box'>
        <p>Property Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip}</p>
      </div>
      <div className='house_detail_box'>
        <p>Monthly Mortgage: {mort}</p>
        <p>Desired Rent: {rent}</p>
      </div>
      <img src={delete_button} alt='delete button' className='house_delete_button' onClick={_ => props.deleteHouse(id)} />
    </div>
  )
}