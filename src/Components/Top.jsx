import React from 'react';
import './top.css';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from './image/vector-users-icon.jpg'
import image from './image/pexels-photo-797797.png' 
import img2 from './image/pexels-photo-1520620.png'

function Top() {
  return (
    <>
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Welcome to Planti.</h1>
          <p>Welcome Back</p>
        </div>
        <div className='searchBar flex'>
          <input type='text' placeholder='Search Deshboard..'style={{border:'none'}}/>
          <SearchIcon className='icon'/>
        </div>
        <div className='adminDiv flex'>
          <MessageIcon className='icon'/>
          <NotificationsIcon className='icon'/>
          <div className='adminImage'>
           <img src={img} alt='Admin Image'/>
          </div>
        </div>
      </div>
      <div className='cardSection flex'>
        <div className='rightCard flex'>
          {/* <h1>Create sell extraordinary product</h1> */}
          {/* <p>The world's fast growing industry today are natural made product!</p> */}
          <div className='button flex'>
            <button className='btn p-1'>Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>
          <div className='imageDiv'>
            <img src={image} alt='front'/>
          </div>
        </div>
        {/* <div className='leftCard flex'>
         <div className='main flex'>
          <div className='textDiv'>
            <h1>My Stat</h1>
            <div className='flex'>
              <span>Today <br/><small>4 Orders</small></span>
              <span>This Month <br/><small>127 Orders</small></span>
            </div>
          </div>
          <div className='imgDiv'>
            <img src={img2} alt='image'/>
          </div>
         </div>
      </div> */}
      </div>
      </div>
    </>
  )
}

export default Top