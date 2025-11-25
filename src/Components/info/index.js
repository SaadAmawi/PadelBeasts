import React from 'react'
import './index.css'
import InfoCards from '../InfoCards'
import cardimage1 from '../../assets/images/card1.jpeg'
import cardimage2 from '../../assets/images/card2.jpg'
import cardimage3 from '../../assets/images/card3.jpeg'
function Info() {
  return (
    <div className='info-container'>
        <div className='info-inner-container'>
        <div className='info-text'>
            <h1 className='info-header'>
                Enchance Your <span className='color'>Experience</span> <br/>With Padel Beast
            </h1>
        </div>
    <div className='info-content'>
        <InfoCards image={cardimage1} Title={"Expert Coaching and Lessons"} description={"Receive top-notch coaching and lessons from our experienced coaches to improve your skills, and unlock your full potential in a supportive and motivating environment."}/>
        <InfoCards image={cardimage2} Title={"Filtered Padel Matchmaking"} description={"We Introducing Filtered Padel Matchmaking, that match you with perfect padel partners based on skill, availability, location, and playing style."}/>
        <InfoCards image={cardimage3} Title={"Expert Coaching and Lessons"} description={"Padel Beast can help you plan and run padel events and tournaments, from small social gatherings to large-scale competitions."}/>
        <InfoCards image={cardimage2} Title={"Expert Coaching and Lessons"} description={"Padel Beast can help you plan and run padel events and tournaments, from small social gatherings to large-scale competitions."}/>
        <InfoCards image={cardimage2} Title={"Expert Coaching and Lessons"} description={"Padel Beast can help you plan and run padel events and tournaments, from small social gatherings to large-scale competitions."}/>
        <InfoCards image={cardimage2} Title={"Expert Coaching and Lessons"} description={"Padel Beast can help you plan and run padel events and tournaments, from small social gatherings to large-scale competitions."}/>
    </div>
    </div>
    </div>
  )
}

export default Info