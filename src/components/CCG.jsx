import React, {useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { MdOutline3DRotation } from "react-icons/md"
import LazyLoad from 'react-lazy-load';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CCGMAYA1 from "../assets/CCGMAYA1resize.png"
import CCGMAYA2 from "../assets/CCGMAYA2resize.png"
import CCGMAYA3 from "../assets/CCGMAYA3resize.png"
import CCGHITANI from "../assets/CCGHITANIresize.png"
import CCGA0 from "../assets/CCGA0resize.png"
import CCGAAAUNIT1 from "../assets/CCGAAAUNIT1resize.png"
import CCGAMIN from "../assets/CCGAMINresize.png"
import CCGFALLENANGELAMSHIRO from "../assets/CCGFALLENANGELAMSHIROresize.png"
import Stage1back from "../assets/Stage1backresize.png"
import Stage2back from "../assets/Stage2backresize.png"
import Stage3back from "../assets/Stage3backresize.png"



function CCG() { 
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
    <div className='p-2'>
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
          
          <div className={`scene relative lg:w-[490px] w-[90%] h-[450px] lg:h-[650px] mx-auto group ${isLoaded ? "" : "bg-gray-100 animate-pulse rounded-lg"}`} onClick={(e) => handleFlip(e, "maya1")} data-ccg-id="maya1">
           
              
            <div className={`card ${isFlipped && id === "maya1" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                    <img src={CCGMAYA1}/>
                  </LazyLoad>
    </div>
              <div className="card__face card__face--back">
                  <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                    <img src={Stage1back}
                  />
                  </LazyLoad>
    </div>
              </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
              <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>
       
        </SplideSlide>
        <SplideSlide>
         
            <div className={`scene relative lg:w-[490px] w-[90%] h-[450px] lg:h-[650px] mx-auto group ${isLoaded ? "" : "bg-gray-100 animate-pulse rounded-lg"}`} onClick={(e) => handleFlip(e, "maya2")} data-ccg-id="maya2">
  <div className={`card ${isFlipped && id === "maya2" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={CCGMAYA2}  />
                </LazyLoad>
    </div>
              <div className="card__face card__face--back">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={Stage2back}   />
                </LazyLoad>
    </div>
            </div>
            <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>
       
        </SplideSlide>
        <SplideSlide>
         <div className={`scene relative lg:w-[490px] w-[90%] h-[450px] lg:h-[650px] mx-auto group ${isLoaded ? "" : "bg-gray-100 animate-pulse rounded-lg"}`} onClick={(e) => handleFlip(e, "maya3")} data-ccg-id="maya3">
  <div className={`card ${isFlipped && id === "maya3" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={CCGMAYA3} />
                </LazyLoad>
    </div>
              <div className="card__face card__face--back">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={Stage3back}/>
                </LazyLoad>
    </div>
            </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>
        </SplideSlide>
        <SplideSlide>
          <div className={`scene relative lg:w-[490px] w-[90%] h-[450px] lg:h-[650px] mx-auto group ${isLoaded ? "" : "bg-gray-100 animate-pulse rounded-lg"}`} onClick={(e) => handleFlip(e, "maya4")} data-ccg-id="maya4">
  <div className={`card ${isFlipped && id === "maya4" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={CCGHITANI} />
                </LazyLoad>
    </div>
              <div className="card__face card__face--back">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={Stage1back}/>
                </LazyLoad>
    </div>
            </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>
          
        </SplideSlide>
        <SplideSlide>
            <div className={`scene relative lg:w-[490px] w-[90%] h-[450px] lg:h-[650px] mx-auto group ${isLoaded ? "" : "bg-gray-100 animate-pulse rounded-lg"}`} onClick={(e) => handleFlip(e, "maya5")} data-ccg-id="maya5">
  <div className={`card ${isFlipped && id === "maya5" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={CCGA0} />
                </LazyLoad>
    </div>
              <div className="card__face card__face--back">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={Stage1back}/>
                </LazyLoad>
    </div>
            </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>
        </SplideSlide>
        <SplideSlide>
           <div className={`scene relative lg:w-[490px] w-[90%] h-[450px] lg:h-[650px] mx-auto group ${isLoaded ? "" : "bg-gray-100 animate-pulse rounded-lg"}`} onClick={(e) => handleFlip(e, "maya6")} data-ccg-id="maya6">
  <div className={`card ${isFlipped && id === "maya6" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={CCGAAAUNIT1} />
                </LazyLoad>
    </div>
              <div className="card__face card__face--back">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={Stage1back}/>
                </LazyLoad>
    </div>
            </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>
         
        </SplideSlide>
        <SplideSlide>
          <div className={`scene relative lg:w-[490px] w-[90%] h-[450px] lg:h-[650px] mx-auto group ${isLoaded ? "" : "bg-gray-100 animate-pulse rounded-lg"}`} onClick={(e) => handleFlip(e, "maya7")} data-ccg-id="maya7">
  <div className={`card ${isFlipped && id === "maya7" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={CCGFALLENANGELAMSHIRO} />
                </LazyLoad>
    </div>
              <div className="card__face card__face--back">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={Stage1back}/>
                </LazyLoad>
    </div>
            </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>
        </SplideSlide>
        <SplideSlide>
          <div className={`scene relative lg:w-[490px] w-[90%] h-[450px] lg:h-[650px] mx-auto group ${isLoaded ? "" : "bg-gray-100 animate-pulse rounded-lg"}`} onClick={(e) => handleFlip(e, "maya8")} data-ccg-id="maya8">
  <div className={`card ${isFlipped && id === "maya8" ? "is-flipped" : ""}`}>
              <div className="card__face card__face--front">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={CCGAMIN} />
                </LazyLoad>
    </div>
              <div className="card__face card__face--back">
                <LazyLoad offset={300} onContentVisible={() => setIsLoaded(true)}>
                  <img src={Stage1back}/>
                </LazyLoad>
    </div>
            </div>
             <div className='absolute bottom-10 hidden items-center justify-center w-full group-hover:flex group-hover:animate-bounce'>
               <div className='flex bg-project_black_shade px-3 py-2 rounded-md gap-2 items-center justify-center text-lg'>
                <h1 className='text-project_white '>click to flip</h1>
              <MdOutline3DRotation className='text-project_white'/>
              </div>
            </div>
</div>

        </SplideSlide>
</Splide>
    </div>
  )
}

export default CCG