import React from 'react';
import './body.css';
import Top from './Top';
import Listing from './Listing';
import Activity from './Activity';
function Body() {
  return (
    <>
    <div className='mainContent'>
      <Top/>
       <div className='bottom flex'>
        <Listing/>
        <Activity/>
       </div>
    </div>
    
    </>
  )
}

export default Body