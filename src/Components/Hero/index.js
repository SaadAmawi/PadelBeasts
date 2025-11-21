import React from 'react'
import Beams from '../../ReactBits/Backgrounds/Beams/Beams';
import './index.css'
import logo from '../../assets/images/logo 2.png'
import video from '../../assets/images/file.mp4'
import TextPressure from '../../ReactBits/TextPressure/TextPressure';
function Hero() {
  return (
    <div className='hero'>
        <div className='header'>
            <div className='video-bg'>
            <video 
            src="https://video.wixstatic.com/video/df30b2_81cf8923655a4795b9bf807fcd937df7/1080p/mp4/file.mp4"
            loop
            autoPlay
            muted
            playsInline
            preload="auto"
            height="100%"
            />
            <div class="gradient-overlay"></div>
            </div>
        
            <div className='hero-text'>
            <img src={logo} className='image'></img>
            <div className='text'>
                
            <TextPressure 
            text='The Padel Project'
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={false}
            italic={true}
            textColor="#ffffff"

            minFontSize={59}></TextPressure>
            </div>
            <h2> PADEL | COACHING | TOURNAMENTS | FITNESS | ACADEMY  </h2>

            </div>
        </div>
    </div>
  )
}

export default Hero