import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navleft">
        <img className="logo"
          src="https://pngimg.com/uploads/twitch/twitch_PNG6.png" alt='logo'
        />
        <h2>Browse</h2>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div className="Navmiddle">
        <input type="text" placeholder="search"/>
        <div className="searchlogo">
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="Navright">
        <div className='Navlogin'>
          <h5>Log In</h5>
        </div>
        <div className="Navsign">
          <h5>Sign Up</h5>
        </div>
        <i className="fa-regular fa-user"></i>
        </div> 
    </div>

  
  )
}

export default Navbar;