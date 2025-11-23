import React, { useEffect } from 'react'
import './index.css'
import padel from '../../assets/images/padel2.png'
function About() {

  return (
    <div className="about-container">
      
      {/* <img src={padel} className='abs'/> */}
      <div className='left'>
      <div className="text-section">
          <h1 className='Title'>Building a Strong Padel <span className='color'>Community</span> in UAE</h1>
          <h2 className='about'>
           Padel Beast is dedicated to fostering the growth of the padel tennis in the United Arab Emirates. With a passion for the game and a commitment to excellence, we offer a comprehensive range of services including coaching lessons, match making, tournaments, club management, and more. Our mission is to create a thriving padel community that brings people together, promotes competition, and provides opportunities for players of all levels to improve their skills.
          </h2>
      </div>
      </div>
      <div className='right'>
          <iframe src='https://www.youtube.com/embed/ocl3bBhTpVc'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            height={600}
            title="Padel Beast"/>
            </div>
</div>


  )
}

export default About