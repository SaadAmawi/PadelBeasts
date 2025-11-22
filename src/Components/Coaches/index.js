import React from 'react'
import './index.css'
import CoachCard from '../CoachCard'
import navaro from '../../assets/images/navaro.jpg'
import cristina from '../../assets/images/cristina.png'
import art from '../../assets/images/art.jpg'
import bern from '../../assets/images/bern.jpg'
import lomp from '../../assets/images/lop.jpg'
// import cristina from '../../assets/images/cristina.png'
import Iris from '../../assets/images/coach2.png'
function Coaches() {
  return (
    <div className='Coaches-container'>
      <div className='content'>
        <h1 className='title'>Our Coaches</h1>
        <p className='texts'>Our experienced coaches provide personalized one-on-one lessons as well as group lessons for two or more players to improve your padel tennis skills and enhance your game. Whether you're a beginner or an advanced player, we have the expertise to help you reach your full potential.</p>
        <div className='coaches'>
        <CoachCard Name={"Navid Fahadezh"} Image={navaro}/>
        <CoachCard Name={"Cristina Navaro"} Image={cristina}/>
        <CoachCard Name={"Arturo"} Image={art}/>
        <CoachCard Name={"Marc Llompart"} Image={lomp}/>
        <CoachCard Name={"Iris Murcia"} Image={Iris}/>
        <CoachCard Name={"bernardo konzen"} Image={bern}/>
        </div>
        </div>
    </div>
  )
}

export default Coaches