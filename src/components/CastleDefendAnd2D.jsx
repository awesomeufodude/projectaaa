import React from 'react'
import CastleDefence from "../assets/castle-defense.jpg"

function CastleDefendAnd2D() {
  return (
      <div className='p-2 mt-10'>
          <h2 className='text-project_white text-center mt-10 mb-5 lg:text-4xl font-bold text-3xl'>Tower Defense</h2>
          <div className='w-[90%] lg:h-[600px] h-[200px] mx-auto rounded-lg flex items-center justify-center my-5'>
              <img src={CastleDefence}className="rounded-lg" loading='lazy'/>
              
          </div>
      </div>
  )
}

export default CastleDefendAnd2D