import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiYoutube} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abida The Worshippers</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Gallery</a></li>
        <li><a href="#testimonials">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100063616154598" target='_blank'><FiFacebook/></a>
        <a href="https://instagram.com/abida_the_worshippers?igshid=YmMyMTA2M2Y=" target='_blank'><AiOutlineInstagram/></a>
        <a href="https://youtube.com/channel/UCJmG_QUejx3tiFt2igt6jZA" target='_blank'><FiYoutube/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Abida the Worshippers Official</small>
      </div>
    </footer>
  )
}

export default Footer