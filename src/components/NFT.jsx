import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import LazyLoad from 'react-lazy-load';
import '@splidejs/react-splide/css';
import nft1 from "../assets/nftresize (1).jpg"
import nft2 from "../assets/nftresize (2).jpg"
import nft3 from "../assets/nftresize (3).jpg"
import nft4 from "../assets/nftresize (4).jpg"
import nft5 from "../assets/nftresize (5).jpg"
import nft6 from "../assets/nftresize (6).jpg"
import nft7 from "../assets/nftresize (7).jpg"
import nft8 from "../assets/nftresize (8).jpg"
import nft9 from "../assets/nftresize (9).jpg"
import nft10 from "../assets/nftresize (10).jpg"
import nft11 from "../assets/nftresize (11).jpg"
import nft12 from "../assets/nftresize (12).jpg"

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

const Nftdata = [
    {
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },
    {
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    },{
        title: "NFT Illustration",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link : "https://opensea.io/collection/projectaaa-collection"
    }
]

function NFT({NftRef, setIsModalOpen, setNftId}) {
  return (
    <div className='p-4 mt-10 scroll-mt-28' ref={NftRef}>
     <h1 className="text-project_white lg:text-8xl text-4xl text-center font-bold">NFT collection</h1>
    <p className="text-project_white/50 text-center mt-5 lg:w-1/2 lg:text-lg font-semibold lg:mx-auto">Every piece of art that you get to own from our collection, its unique; there are 270 NFTs at OpenSea.</p>
          <div className='flex items-center justify-center mt-4'>
               <a href="https://opensea.io/collection/projectaaa-collection" target="_blank" className='flex items-center gap-3 bg-project_black_shade px-4 py-2 lg:text-3xl text-xl font-extrabold text-project_white rounded-lg group cursor-pointer z-40'><h2>Explore</h2><FaExternalLinkAlt className='text-project_orange transition-all ease-linear duration-100 group-hover:translate-x-1'/></a>
          </div>
          
               <Splide aria-label="CCG" options={{
              perPage: 4,
              autoplay: true,
              type    : 'loop',
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
          className="my-10 w-[90%] mx-auto"
          >
               {Nftdata?.map((nft, i) => ( <SplideSlide key={i}>
                   <div className='w-[300px] bg-project_black_shade mx-auto group p-3 rounded-lg z-[999] cursor-pointer' onClick={(e) => { e.stopPropagation(); setIsModalOpen(true);  setNftId(i) }}>
                <LazyLoad offset={300}>
                            <img src={images[i]} className="w-[250px] mx-auto transition-all ease-in duration-150 group-hover:-translate-y-2 group-hover:scale-105 rounded-md"/> 
                 </LazyLoad>
                  <div>
                     <h1 className='text-project_white text-2xl font-semibold text-center mt-3'>{nft?.title}</h1>
                      <p className='text-project_white/50 text-center w-[90%] mx-auto mt-2'>
                          {nft?.description}
                      </p>
                      <div className='flex items-center justify-center mt-5'>
                           <a href={nft?.link} target='_blank' className='text-project_white bg-project_orange px-3 py-1 rounded-md text-lg font-semibold' onClick={(e) => e.stopPropagation()}>
                          Get NFT
                      </a>
                     </div>
                  </div>
              </div>
        </SplideSlide>))}
  
        
</Splide>
        
          
            
   
    </div>
  )
}

export default NFT