import React from 'react'
import './index.css'
import CoachCard from '../CoachCard'
import navaro from '../../assets/images/navaro2.png'
import cristina from '../../assets/images/cristina2.png'
import art from '../../assets/images/art.png'
import bern from '../../assets/images/bern.png'
import lomp from '../../assets/images/lop.png'
// import cristina from '../../assets/images/cristina.png'
import Iris from '../../assets/images/coach22.png'
function Coaches() {
  return (
    <div className='Coaches-container'>
      <div className='content'>
        <h1 className='title'>Our <span className="color">Coaches</span></h1>
        <p className='texts'>Our experienced coaches provide personalized one-on-one lessons as well as group lessons for two or more players to improve your padel skills and enhance your game. Whether you're a beginner or an advanced player, we have the expertise to help you reach your full potential.</p>
        <div className='coaches'>
        <CoachCard Name={"Navid Fahadezh"} Image={navaro} handle={"navidff"} info={"Navid is a passionate coach with over 10 years of coaching and facility management experience."}/>
        <CoachCard Name={"Cristina Navaro"} Image={cristina} handle={""} info={"Cris specializes in improving the physical fitness and agility of padel players with over 5 years of coaching experience."}/>
        <CoachCard Name={"Arturo Delage"} Image={art} handle={"fitness4padel__"} info={"Navid is a passionate coach with over 10 years of coaching and facility management experience."}/>
        <CoachCard Name={"Marc Llompart"} Image={lomp} handle={"llompart.padelcoach"} info={"Navid is a passionate coach with over 10 years of coaching and facility management experience."}/>
        <CoachCard Name={"Iris Murcia"} Image={Iris} handle={""} info={"Iris is a highly skilled padel player with over 14 years of coaching experience.."}/>
        <CoachCard Name={"Bernardo Konzen"} Image={bern} handle={"bernardokonzen"} info={"Navid is a passionate coach with over 10 years of coaching and facility management experience."}/>
        </div>
        </div>
    </div>
  )
}

export default Coaches