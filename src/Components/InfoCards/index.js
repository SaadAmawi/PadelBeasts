import React from 'react'
import './index.css'
import ElectricBorder from '../../ReactBits/ElectricBorder/ElectricBorder'

function InfoCards({image, Title, description}) {
  return (
    <div className='card-container'>
      <ElectricBorder
        color="#0b67f1ff"
        speed={1}
        chaos={0.7}
        thickness={3}
        style={{ borderRadius: 0 }}
      >
        <img src={image} className='card-image'/>
        <h1 className='card-title'>{Title}</h1>
        <p className='card-desc'>{description}</p>

      </ElectricBorder>
    </div>
  )
}

export default InfoCards