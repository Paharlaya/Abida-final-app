import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.jpg'
import AVTR6 from '../../assets/avatar6.jpg'
import AVTR7 from '../../assets/avatar7.jpg'
import AVTR8 from '../../assets/avatar8.jpg'
import AVTR9 from '../../assets/avatar9.jpg'
import AVTR10 from '../../assets/avatar10.jpg'
import AVTR11 from '../../assets/avatar11.jpg'
import AVTR12 from '../../assets/avatar12.jpeg'
import AVTR13 from '../../assets/avatar13.jpeg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



  const data = [
    {
      avatar: AVTR1,
      name:'Sushant Sherpa',
      review:'Role:Drummer'
    },
    {
      avatar: AVTR2,
      name:'Grace Subba',
      review:'Role:vocals'
    },
    {
      avatar: AVTR3,
      name:'Israel Mukhia',
      review:'Role:vocals'
    },
    {
      avatar: AVTR4,
      name:'Praniel B.K',
      review:'Role:Drummer'
    },
    {
      avatar: AVTR5,
      name:'Dipesh Lama',
      review:'Role:Base guitarist'
    },

    {
      avatar: AVTR6,
      name:'Anish Thapa',
      review:'Role:Guitarist'
    },
    {
      avatar: AVTR7,
      name:'Santosh Bishwakarma',
      review:'Role:guitarist'
    },
    {
      avatar: AVTR8,
      name:'Nishal Singh',
      review:'Role:Keyboard'
    },   {
      avatar: AVTR9,
      name:'Arpan Thapa',
      review:'Role:Keyboard'
    },
    {
      avatar: AVTR10,
      name:'Dikchen Yolmo',
      review:'Role:Media Team'
    },
    {
      avatar: AVTR11,
      name:'Evan Pradhan',
      review:'Role:Vocals'
    },
    {
      avatar: AVTR12,
      name:'Johah Subba',
      review:'Role:Media Team'
    },
    {
      avatar:AVTR13,
      name:'Diwas Ghising',
      review:'Role:Guitarist'
    }

  ]

  

  /*===================================================MAP CONCEPT================================================*/

  /*===================================================SWIPERR.JS CONCEPT================================================*/

const Testimonials = () => {
  return (
   <section id='testimonials'>
     <h5>The</h5>
     <h2>Team</h2>

     <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
   
     >
     
{
  data.map (({avatar,name,review}, index) => {

    return (
      <SwiperSlide key={index} className='testimonial'>
        <div className="client__avatar">
          <img src={avatar}  />
        </div>
        <h5 className="client__name">
          {name}
        </h5>
        <small className="client__review">
          {review}
        </small>
      </SwiperSlide>
    )

  })
}
   
     </Swiper>
   </section>
  )
}

export default Testimonials