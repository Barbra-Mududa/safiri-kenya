import React from 'react'
import Camping from './Camping'
import "./travel.css";
import Safari from './Safari';
import Hiking from './Hiking';

function Travel() {
  return (
    <div className='travelcont'>
       <Safari />
       <Camping />
       <Hiking />
    </div>
  )
}

export default Travel