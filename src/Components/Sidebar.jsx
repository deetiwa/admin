import React from 'react';
import './sidebar.css';
import logo from '../Components/image/logo.png';  // imported Image //
import SpeedIcon from '@mui/icons-material/Speed';  // Icons //
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ExploreIcon from '@mui/icons-material/Explore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PieChartIcon from '@mui/icons-material/PieChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ContactsIcon from '@mui/icons-material/Contacts';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Sidebar() {
  return (
    <>
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt='Image Name'/>
        <h2>Planti</h2>
      </div>
      <div className='menuDiv'>
        <h3 className='divTitle'>
           QUICK MENU
        </h3>
         <ul className='menuList grid'>

           <li className="listItem">
            <a href='#' className='menuLink flex'>
              <SpeedIcon className='icon'/>
              <span className='smallText'>Dash Board</span>
            </a>
           </li>
           <li className="listItem">
            <a href='#' className='menuLink flex'>
              <DeliveryDiningIcon className='icon'/>
              <span className='smallText'>My Orders</span>
            </a>
           </li>
           <li className="listItem">
            <a href='#' className='menuLink flex'>
              <ExploreIcon className='icon'/>
              <span className='smallText'>Explore</span>
            </a>
           </li>
           <li className="listItem">
            <a href='#' className='menuLink flex'>
              <EmojiEventsIcon className='icon'/>
              <span className='smallText'>Products</span>
            </a>
           </li>
         </ul>
      </div>
      <div className='settingsDiv'>
        <h3 className='divTitle'>
          SETTINGS
        </h3>
        <ul className='menuList grid'>
           <li className="listItem">
            <a href='#' className='menuLink flex'>
              <PieChartIcon className='icon'/>
              <span className='smallText'>Charts</span>
            </a>
           </li>
           <li className="listItem">
            <a href='#' className='menuLink flex'>
              <TrendingUpIcon className='icon'/>
              <span className='smallText'>Trends</span>
            </a>
           </li>
           <li className="listItem">
            <a href='#' className='menuLink flex'>
              <ContactsIcon className='icon'/>
              <span className='smallText'>Contact</span>
            </a>
           </li>
           <li className="listItem">
            <a href='#' className='menuLink flex'>
              <CreditCardIcon className='icon'/>
              <span className='smallText'>Billing</span>
            </a>
           </li>
         </ul>
      </div>
      <div className='sideBarCard'>
        <HelpOutlineIcon className='help'/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>Having Trouble in Planti, Please contact us from for more questions.</p>
          <button className='btn'>Go To Help Center</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar