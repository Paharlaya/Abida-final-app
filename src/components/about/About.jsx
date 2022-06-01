import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
  
    <h5>Get to know</h5>
    <h2>about us</h2>
  
    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="" />
      </div>
    </div>
    <div className="about_content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ years</small>
       </article>
       <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>300+ satisfied customer</small>
       </article>
       <article className='about__card'>
          <BsFolder2 className='about__icon'/>
          <h5>Projects</h5>
          <small>Check our Youtube</small>
       </article>

      </div>

      <p>Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Minima tempora veritatis 
        pariatur ipsum. Maxime, quisquam fugiat. Eum 
        soluta inventore minima autem doloremque. Corporis 
        inventore dolore enim expedita, pariatur veniam,
         dignissimos soluta rem facilis odio commodi rerum,
          iusto amet saepe accusamus?</p>
         
         <a href="#contact" className='btn btn-primary'>Lets talk</a>
    </div>
  
    </div>
  </section>
  )
}

export default About