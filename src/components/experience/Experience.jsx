import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
 <section id='experience'>
   <h5>What skills we have</h5>
   <h2>What we offer</h2>

   <div className="container experience__container">
     <div className="experience__frontend">
      <h3>Audio Production</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>topic</h4>
          <small className='text-light'>Experienced</small>
          </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>topic</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>topic</h4>
          <small className='text-light'>Experienced</small>
         </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>topic</h4>
          <small className='text-light'>Experienced</small>
         </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>topic</h4>
          <small className='text-light'>Experienced</small>
       </div>

        </article>
      </div>
     </div>
     <div className="experience__backend">
     <h3>Video production</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>topic</h4>
          <small className='text-light'>Experienced</small>
           </div>
       
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>

           <div>       
           <h4>topic</h4>
          <small className='text-light'>Experienced</small>
          </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>topic</h4>
          <small className='text-light'>Experienced</small>
         </div>

        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>topic</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>topic</h4>
          <small className='text-light'>Experienced</small>
         </div>

        </article>
      </div>

     </div>
   </div>
 </section>
  )
}

export default Experience