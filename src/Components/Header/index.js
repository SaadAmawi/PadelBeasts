import React from 'react'
import GlassSurface from '../../ReactBits/GlassSurface/GlassSurface';
import image from '../../assets/images/logo 2.png'
import './index.css'
function Header() {
  return (
    <div className='Head'>
        <GlassSurface
     width="80%"
     height="65px"
     > 
     <div className='glass'>
    <div className='logo'>
    <img src={image} width={20} height={60}/>
    </div>
    <div className='buttons'>
     <button className='header-button'>Home</button>
     <button className='header-button'>About Us</button>
     <button className='header-button'>Coaches</button>
     <button className='header-button'>Services</button>
     <button className='header-button'>Contact Us</button>
     </div>
     <div className='end'></div>
     </div>
     </GlassSurface>
    </div>
  )
}

export default Header