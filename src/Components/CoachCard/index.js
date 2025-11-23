import React from 'react'
import ProfileCard from '../../ReactBits/ProfileCard/ProfileCard'
import ball from '../../assets/images/ball.png'
import './index.css'
function CoachCard({Name,Image,handle,info}) {
  return (
    <div className='card'>
       <ProfileCard
        name={Name}
        title="Padel Coach"
        handle={handle}
        status="Online"
        contactText="Contact Me"
        avatarUrl={Image}
        showUserInfo={true}
        enableTilt={true}
        iconUrl={ball}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
        /> 
        <p className='info'>{info}</p>
  

    </div>
  )
}

export default CoachCard