import React from 'react'
import Camping from './Camping'
import "./travel.css";
import Safari from './Safari';
import Hiking from './Hiking';

function Travel() {
  return (
    <div className='travelcont'>
      <h2 id='maintrav'>Our Collection</h2>
       <Safari />
       <Camping />
       <Hiking />
    </div>
  )
}

export default Travel