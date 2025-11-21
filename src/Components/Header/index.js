import React from 'react'
import GlassSurface from '../../ReactBits/GlassSurface/GlassSurface';
import './index.css'
function Header() {
  return (
    <div className='Head'>
        <GlassSurface
     width="70%"
     > 
     <div className='glass'>
     <button className='header-button'>Home</button>
     <button className='header-button'>About Us</button>
     <button className='header-button'>Coaches</button>
     <button className='header-button'>Services</button>
     <button className='header-button'>Contact Us</button>
     </div>
     </GlassSurface>
    </div>
  )
}

export default Header