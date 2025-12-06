import React from 'react'
import GlassSurface from '../../ReactBits/GlassSurface/GlassSurface';
import image from '../../assets/images/logo 2.png'
import './index.css'
function Header() {
    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }; 
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
     <button className='header-button' onClick={()=>{scrollToSection('home')}}>Home</button>
     <button className='header-button' onClick={()=>{scrollToSection('about')}}>About Us</button>
     <button className='header-button' onClick={()=>{scrollToSection('coaches')}}>Coaches</button>
     <button className='header-button'>Services</button>
     <button className='header-button' onClick={()=>{scrollToSection('contact')}}>Contact Us</button>
     </div>
     <div className='end'></div>
     </div>
     </GlassSurface>
    </div>
  )
}

export default Header