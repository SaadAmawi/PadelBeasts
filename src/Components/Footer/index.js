import React from 'react'
import './index.css'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='Footer-container'>
      <div className='col'>
        <div className='row'>
            <div className='cols'>
                <a className='links'>Home</a>
                <a className='links'>About Us</a>
                <a className='links'>Coaches</a>
            </div>
            <div className='cols'>
                <a className='links'>Services</a>
                <a className='links'>Contact Us</a>
                <a className='links'>More</a>

            </div>
            <div className='cols'>
                <a>thepadelbeast@gmail.com</a>
                <a>10 AM to 10 PM</a>
                <a>+971 56 167 7227</a>
                
            </div>
        </div>
        <div className='bottom'>
            <div className='socials'>
        <SocialIcon url='https://www.youtube.com/in/saad-amawi/' color='white' style={{height:"40px",width:"40px"}}/>
        <SocialIcon url='https://www.instagram.com/in/saad-amawi/' color='white' style={{height:"40px",width:"40px"}}/>
        <SocialIcon url='https://www.facebook.com/saadamawi' color='white' style={{height:"40px",width:"40px"}}/>
        <SocialIcon url='https://x.com/u/TheSovereign2/' color='white' style={{height:"40px",width:"40px"}}/>
        </div>
      <p>© 2024  by Padel Beast. </p>
      </div>
      </div>
    </div>
  )
}

export default Footer
