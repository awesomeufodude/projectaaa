import React, { useRef, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { MdOutline3DRotation } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import CCGMAYA1 from "../assets/CCGMAYA1.png"
import CCGMAYA2 from "../assets/CCGMAYA2.png"
import CCGMAYA3 from "../assets/CCGMAYA3.png"
import CCGHITANI from "../assets/CCGHITANI.png"
import CCGA0 from "../assets/CCGA0.png"
import CCGAAAUNIT1 from "../assets/CCGAAAUNIT1.png"
import CCGAMIN from "../assets/CCGAMIN.png"
import CCGFALLENANGELAMSHIRO from "../assets/CCGFALLENANGELAMSHIRO.png"
import Stage1back from "../assets/Stage1back.png"
import Stage2back from "../assets/Stage2back.png"
import Stage3back from "../assets/Stage3back.png"
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import skeletonImage from "../assets/skeletonImage.svg"



function CCG() { 
  const { containerRef, inView } = useIntersectionObserver({ root: null, rootMargin: "0px", threshold: 0 })
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [id, setId] = useState("");

  const handleFlip = (e,id) => {
    const flipid = e?.currentTarget?.getAttribute(['data-ccg-id'])
    setId(flipid);
    if (flipid === id) {
      setIsFlipped(!isFlipped)
    }
  }

  return (
    <div className='p-2' ref={containerRef}>
       <h2 className='text-project_white text-center mt-10 mb-5 lg:text-4xl font-bold text-3xl'>CCG</h2>
       <Splide aria-label="CCG" options={{perPage: 3,
        rewind: true,
         
          breakpoints: {
            1500: {
      perPage: 2,
    },
            1200: {
      perPage: 2,
    },
            1000: {
      perPage: 2,
    },
           800: {
      perPage: 2,
    },
    640: {
      perPage: 1,
      gap: "1rem"
    },
    480: {
      perPage: 1,
    },
  },
      }}
        
      >
        <SplideSlide>
           <>
          <div className={`lg:w-[400px] w-[90%] h-[300px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
              </div>
            {
              inView &&  <div className="scene relative lg:w-[490px] w-[90%] h-full mx-auto group" onClick={(e) => handleFlip(e, "maya1")} data-ccg-id="maya1">
           
              
            <div className={`card ${isFlipped && id === "maya1" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                  <img src={CCGMAYA1}
                    onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}
                        />
    </div>
              <div className="card__face card__face--back">
                  <img src={Stage1back}
                  onLoad={() => {
          setIsLoaded(true);
                    }}
                     style={{
                      opacity: isLoaded ? 1 : 0
                    }}
                  />
    </div>
              </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
              <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>
       }
</>
        </SplideSlide>
        <SplideSlide>
          <>
            <div className={`lg:w-[400px] w-[90%] h-[300px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
              </div>
            {inView && <div className="scene relative lg:w-[490px] w-[90%] h-full mx-auto group" onClick={(e) => handleFlip(e, "maya2")} data-ccg-id="maya2">
  <div className={`card ${isFlipped && id === "maya2" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <img src={CCGMAYA2}   onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
    </div>
              <div className="card__face card__face--back">
                <img src={Stage2back}   onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
    </div>
            </div>
            <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>}
          </>
        </SplideSlide>
        <SplideSlide>
          <>
            <div className={`lg:w-[400px] w-[90%] h-[300px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
              </div>
         {inView &&  <div className="scene relative lg:w-[490px] w-[90%] h-full mx-auto group" onClick={(e) => handleFlip(e, "maya3")} data-ccg-id="maya3">
  <div className={`card ${isFlipped && id === "maya3" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <img src={CCGMAYA3} onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
    </div>
              <div className="card__face card__face--back">
                <img src={Stage3back} onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
    </div>
            </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>}</>
        </SplideSlide>
        <SplideSlide>
          <>
            <div className={`lg:w-[400px] w-[90%] h-[300px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
            </div>
            {
            inView && <div className="lg:w-[490px] w-[90%] h-full mx-auto" data-ccg-id="hitani">
              <img src={CCGHITANI}
                onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
</div>
          }
          </>
        </SplideSlide>
        <SplideSlide>
           <>
            <div className={`lg:w-[400px] w-[90%] h-[300px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
            </div>
            {
            inView && <div className="lg:w-[490px] w-[90%] h-full mx-auto" data-ccg-id="hitani">
              <img src={CCGA0}
                onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
</div>
          }
          </>
        </SplideSlide>
        <SplideSlide>
          <>
            <div className={`lg:w-[400px] w-[90%] h-[300px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
            </div>
            {
            inView && <div className="lg:w-[490px] w-[90%] h-full mx-auto" data-ccg-id="hitani">
              <img src={CCGAAAUNIT1}
                onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
</div>
          }
          </>
        </SplideSlide>
        <SplideSlide>
          <>
            <div className={`lg:w-[400px] w-[90%] h-[300px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
            </div>
            {
            inView && <div className="lg:w-[490px] w-[90%] h-full mx-auto" data-ccg-id="hitani">
              <img src={CCGFALLENANGELAMSHIRO}
                onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
</div>
          }
          </>
        </SplideSlide>
        <SplideSlide>
           <>
            <div className={`lg:w-[400px] w-[90%] h-[300px] mx-auto bg-gray-100 animate-pulse rounded-lg  items-center justify-center ${isLoaded ? "hidden" : "flex"}`}>
                <img src={skeletonImage} className="w-16 h-16 opacity-70"/>
            </div>
            {
            inView && <div className="lg:w-[490px] w-[90%] h-full mx-auto" data-ccg-id="hitani">
              <img src={CCGAMIN}
                onLoad={() => {
                      setIsLoaded(true);
                      
                    }}
                    style={{
                      opacity: isLoaded ? 1 : 0
                    }}/>
</div>
          }
          </>
        </SplideSlide>
</Splide>
    </div>
  )
}

export default CCG