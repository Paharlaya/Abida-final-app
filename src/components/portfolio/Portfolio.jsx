 import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {

  const data = [
    {
      id:1,
      image: IMG1,
      title: 'Abida',
     
    },
    {
      id:2,
      image: IMG2,
      title: 'Abida',
   
    },

    {
      id:3,
      image: IMG3,
      title: 'Abida',
     
    },

    {
      id:4,
      image: IMG4,
      title: 'Abida',
     
    },

    {
      id:5,
      image: IMG5,
      title: 'Abida',
    
    },

    {
      id:6,
      image: IMG6,
      title: 'Abida',
    
    },





  ]

/*===================================================MAP CONCEPT================================================*/

  return (
   <section id='portfolio'>
     <h5>Image</h5>
     <h2>Gallery</h2>
     <div className="container portfolio__container">
       {
         data.map(({id,image,title,github,demo}) => {

          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
             <img src={image}  alt={title} />
            </div>    
               </article>
          )
       
         })
        }
       

            
            </div>
   </section>
  )
}

export default Portfolio