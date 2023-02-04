import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaPen, FaBriefcase, FaBookOpen, FaCode, FaUnity } from "react-icons/fa"
import TeamIcon from './TeamIcon';
import { TheTeam } from "../constant/constantData"

function Authors({authorsRef}) {
  const iconcomponents = [<FaBookOpen />, <FaPen />, <FaBriefcase />, <FaCode />, <FaUnity />]
  return (
    <section className="min-h-screen box-border p-4 scroll-mt-14" ref={authorsRef}>
      <h1 className="text-project_white lg:text-8xl text-4xl text-center font-bold">Project: A.A.A.</h1>
      <p className="text-project_white/50 text-center mt-10 lg:w-1/2 text-lg font-semibold lg:mx-auto">"This marvelous light manga novel is eager to see the light at any cost; every character brings life to the whole story. I've never seen this style before"</p>
      <p className='text-project_white text-center mt-5'>Aika Ato / Art director, LMN-Japan</p>
      <h2 className='text-project_white text-center mt-14 lg:text-4xl font-bold text-3xl'>The Team</h2>
      <div className='mt-20'>
    <Splide aria-label="The Team" options={{perPage: 3,
        rewind: true,
          gap: "3rem",
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
{TheTeam?.map((team, i) => (
  <SplideSlide key={i}>
    <div className='bg-project_black_shade lg:w-[490px] w-[90%] mx-auto p-4 rounded-md space-y-5 lg:h-64 h-72'>
        <div className='flex items-center justify-center'>
          <div className='bg-project_orange w-16 h-16 flex items-center justify-center rounded-full text-project_white text-2xl'>
          <TeamIcon i={team.iconid} arr={iconcomponents} />
        </div>
        </div>
     <h1 className='text-project_white text-xl font-bold text-center'>{team.name}</h1>
     <p className='text-project_white text-center text-sm lg:text-base'>{team.description}</p>
      </div>
  </SplideSlide>))}
</Splide>
     
 </div>
      <h3 className="text-project_white lg:text-8xl text-4xl text-center font-bold">BUY/OWN THE RIGHTS OF THIS SERIES AND GAME</h3>
      <p className="text-project_white/50 text-center mt-10 lg:w-1/2 text-lg font-semibold lg:mx-auto">Contact: luisfelipejimenezroldan@gmail.com</p>
      <p className='text-project_white text-center mt-5'>Rights owner</p>
    </section>
  )
}

export default Authors
