import React from 'react'
import PBC from '../../assets/images/PBC.png'
import './index.css'
function Newsletter() {
  return (
    <div className='newsletter-container'>
        <div className='left'>
            <img src={PBC} className='image'/>
        </div>
        <div className='right'>
            <h1 className='cta'>
                Stay updated with <span className='color'>Padel Beast</span>
            </h1>
            <p className='cta2'>
                Subscribe to our newsletter and never miss an upcoming event.*
            </p>
            <input type='email' className='email' placeholder='email@gmail.com'/>
            <div className='check'>
            <input type='checkbox' className='checkbox'/>
            <p className='cta2' style={{fontSize:"24px"}}>Yes, subscribe me to your newsletter</p>
            </div>
            <button className='submit'>
                Submit
            </button>
        </div>

    </div>
  )
}

export default Newsletter