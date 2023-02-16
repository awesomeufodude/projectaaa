import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import LazyLoad from 'react-lazy-load';
import '@splidejs/react-splide/css';
import Apple from "../assets/applelogo.png"
import Android from "../assets/androidlogo.png"
import Steam from "../assets/steamlogo.png"
import Battle1 from "../assets/BattleScene1resize.jpg"
import Battle2 from "../assets/BattleScene2resize.png"


function FightingGame() {
  return (
    <div className='p-2 mt-10'>
        <h2 className='text-project_white text-center mt-10 mb-5 lg:text-4xl font-bold text-3xl'>Arcade fighting</h2>
          <p className='text-project_white text-center text-xs'>We are releasing our game Q4, 2023.</p>
          <div className='flex items-center justify-center p-2 mt-5'> 
              <div className='flex items-center gap-5'>
                 <a href='#'><img src={Steam} className="w-10 h-10 grayscale transition-all ease-linear duration-200 hover:grayscale-0" /></a>
                  <a href='#'> <img src={Apple} className="w-10 h-10 rounded-full grayscale-0 bg-white transition-all ease-linear duration-200 hover:grayscale-0" /></a>
                   <a href='#'><img src={Android} className="w-10 h-10 grayscale transition-all ease-linear duration-200 hover:grayscale-0"/></a>
              </div>
          </div>
          <div className='w-[90%] mx-auto mt-3'>
              <Splide aria-label="Fighting game" options={{perPage: 1,
        rewind: true,
      }}
        
      >
          <SplideSlide>
            <LazyLoad offset={300}>
              <img src={Battle1} /> 
           </LazyLoad>
              </SplideSlide>
          <SplideSlide>
            <LazyLoad offset={300}>
              <img src={Battle2}  /> 
            </LazyLoad>
                  
</SplideSlide>
        
</Splide>
           </div>
      </div>
  )
}

export default FightingGame