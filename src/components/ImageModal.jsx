import React from 'react'
import { MdClear } from "react-icons/md"
import nft1 from "../assets/nft (1).jpg"
import nft2 from "../assets/nft (2).jpg"
import nft3 from "../assets/nft (3).jpg"
import nft4 from "../assets/nft (4).jpg"
import nft5 from "../assets/nft (5).jpg"
import nft6 from "../assets/nft (6).jpg"
import nft7 from "../assets/nft (7).jpg"
import nft8 from "../assets/nft (8).jpg"
import nft9 from "../assets/nft (9).jpg"
import nft10 from "../assets/nft (10).jpg"
import nft11 from "../assets/nft (11).jpg"
import nft12 from "../assets/nft (12).jpg"


const images =  [
    nft1,
    nft2,
    nft3,
    nft4,
    nft5,
    nft6,
    nft7,
    nft8,
    nft9,
    nft10,
    nft11,
    nft12
]

function ImageModal({id, setIsModalOpen}) {
  return (
      <div className='w-full min-h-screen bg-black/70 z-[9999] flex items-center justify-center sticky overflow-y-auto top-0'>
          <div className='flex items-center justify-center w-10 h-10 bg-white absolute top-5 rounded-full group cursor-pointer' onClick={() => setIsModalOpen(false)}>
              <MdClear className='text-black text-xl  group-hover:text-red-500'/>
          </div>
      <div >
        <img src={images[id]} className="lg:w-[700px] lg:h-[900px] w-[300px] h-[450px]"/>
          </div>
    </div>
  )
}

export default ImageModal