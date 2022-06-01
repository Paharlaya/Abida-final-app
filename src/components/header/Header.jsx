import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello We are</h5>
        <h1>ABIDA</h1>
        <h5 className="text-light">THE WORSHIPPERS</h5> 
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
        

      </div>
    </header>
  )
}

export default Header