import React from 'react'
import TiltedCard from '../../ReactBits/TiltedCard/TiltedCard'
import './index.css'
function CoachCard({Name,Image}) {
  return (
    <div>
        <TiltedCard
  imageSrc={Image}
  altText="Kendrick Lamar - GNX Album Cover"
  captionText={Name}
  containerHeight="500px"
  containerWidth="500px"
  imageHeight="350px"
  imageWidth="350px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="card-text">
      {Name}
    </p>
  }
/>
    </div>
  )
}

export default CoachCard