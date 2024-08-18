import React from 'react'
import Background from '../homepageBackgroundAnimation/Background'
import ContentComponent from '../contentComponents/ContentComponent'
import "../../cssss/Responsive.css"

const HeroSection = () => {
  return (
    <div className='w-full h-[100vh] bg-white relative' >
      <Background/>
      <ContentComponent/>
    </div>
  )
}

export default HeroSection