import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from "@material-ui/icons/Apps";  //importing appicon form material-ui
import { Avatar } from '@material-ui/core';
import Search from './Search';

const Home = () => {
  return (
    <div className='home'>        
        <div className='home_header'>
          <div className='home_headerLeft'>
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </div>
          <div className='home_headerRight'>
            <Link to="/gmail">Gmail</Link>
            {/* link we are using link here so that it goes to another page with reloading the entire page as it do in a tag */}
            <Link to="/images">Images</Link>
            <AppsIcon/>
            <Avatar/>
          </div>
        </div>

        <div className='home_body'>
          <img src='https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png' alt='google image'/>
          <div className='home_inputContainer'>
              {/* Search bar */}
              <Search/>
              {/* for hidding the buttonswe use <Search hideButtons/> */}
          </div>
        </div>
    </div>
  )
}

export default Home
