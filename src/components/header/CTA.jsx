import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>ABOUT DEV</a>
        <a href="#contact" className='btn btn-primary'>Connect with us</a>
    </div>
  )
}

export default CTA