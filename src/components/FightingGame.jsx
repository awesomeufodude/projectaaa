import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import Apple from "../assets/applelogo.png"
import Android from "../assets/androidlogo.png"
import Steam from "../assets/steamlogo.png"
import Battle1 from "../assets/BattleScene1.jpg"
import Battle2 from "../assets/BattleScene2.png"
import skeletonImage from "../assets/skeletonImage.svg"
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


function FightingGame() {
  const { containerRef, inView } = useIntersectionObserver({ root: null, rootMargin: "0px", threshold: 0 })
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className='p-2 mt-10' ref={containerRef}>
        <h2 className='text-project_white text-center mt-10 mb-5 lg:text-4xl font-bold text-3xl'>Fighting game</h2>
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
          <SplideSlide><>
            <div className={`w-[90%] lg:h-[600px] h-[200px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
              </div>
            {inView ? <img src={Battle1}  onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/> : <div className={`w-[90%] lg:h-[600px] h-[200px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center flex`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
              </div>}
          </>
              </SplideSlide>
          <SplideSlide>
            <>
            <div className={`w-[90%] lg:h-[600px] h-[200px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
              </div>
            {inView ? <img src={Battle2}  onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/> : <div className={`w-[90%] lg:h-[600px] h-[200px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center flex`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
              </div>}
          </>
                  
</SplideSlide>
        
</Splide>
           </div>
      </div>
  )
}

export default FightingGame