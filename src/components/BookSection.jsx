import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Book1 from "../assets/book1resize.png"
import Book2 from "../assets/book2resize.png"
import Book3 from "../assets/comingsoonresize.png"
import {MdArrowBackIos,MdArrowForwardIos} from "react-icons/md"

const Data = [Book1, Book2, Book3]

const BuyBooks = [
  {
    title: "BUY VOLUME 1",
    description: "The Chosen / Los Elegidos / Os Escolhidos",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonlink: [
      {
        title: "English",
        link: "https://www.amazon.com/dp/B0BGCFK91B"
      },
      {
        title: "Español",
        link: "https://www.amazon.com/dp/B0BG39Q75W"
      },
      {
        title: "Português",
        link: ""
      }
    ]
  },
   {
     title: "BUY VOLUME 2",
     description: "The Cycle / El Ciclo / O Ciclo",
     about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
       buttonlink: [
      {
        title: "English",
        link: "https://www.amazon.com/dp/B0BGCHRZJB"
      },
      {
        title: "Español",
        link: "https://www.amazon.com/dp/B0BFVT28SS"
      },
      {
        title: "Português",
        link: ""
      }
    ]
  },
    {
      title: "Coming Soon",
      description: "The Chosen / Los Elegidos / Os Escolhidos",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonlink: [
      {
        title: "English",
        link: ""
      },
      {
        title: "Español",
        link: ""
      },
      {
        title: "Português",
        link: ""
      }
    ]
  }
]

function BookSection({booksRef}) {
 const [FlowDirection, setFlowDirection] = useState(true)
  const [CenterId, setCenterId] = useState(0)
  const [LeftId, setLeftId] = useState(Data.length - 1)
  const [RightId, setRightId] = useState(1)
  let timer;

  const nextBtn = () => {
    if (LeftId === Data.length - 1) {
      setLeftId(0)
    } else {
      setLeftId(LeftId + 1)
    }
    if (CenterId === Data.length - 1) {
      setCenterId(0)
    } else {
      setCenterId(CenterId + 1)
    }

    if (RightId === Data.length - 1) {
      setRightId(0)
    } else {
      setRightId(RightId + 1)
    }
    setFlowDirection(true)
  }
  const prevBtn = () => {
    setFlowDirection(false)
    if (LeftId === 0) {
      setLeftId(Data.length - 1)
    } else {
      setLeftId(LeftId - 1)
    }
    if (CenterId === 0) {
      setCenterId(Data.length - 1)
    } else {
      setCenterId(CenterId - 1)
    }
    if (RightId === 0) {
      setRightId(Data.length - 1)
    } else {
      setRightId(RightId - 1)
    }
  }

  /*useEffect(() => {
   timer = setInterval(() => nextBtn(), 2000)
  return () => clearInterval(timer)
  });*/

  const variants = {
    center: {
      x: '0rem',
      opacity: 1,
      scale: 1.1,
      zIndex: '5',
      filter: "brightness(100%)",
      backgroundImage: 'url(' + Data[CenterId] + ')',
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.3)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    left: {
      x: '-5rem',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage: 'url(' + Data[LeftId] + ')',
      zIndex: '4',
      boxShadow: 'unset',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    right: {
      backgroundImage: 'url(' + Data[RightId] + ')',
      x: '5rem',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      boxShadow: 'unset',
      zIndex: '3',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    rightHidden: {
      x: '8rem',
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: '-8rem',
      scale: 0,
      opacity: 0,
    },
  }

  //onMouseEnter={() => clearInterval(timer)} onMouseLeave={() => {nextBtn()}}

  return (
    <>
      <div>
         <motion.div className="flex justify-center mt-10 scroll-mt-28" ref={booksRef} >
      <motion.div className="relative lg:w-[350px] lg:h-[500px] w-[200px] h-[300px]" >
        <AnimatePresence initial={false}>
          <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? 'center' : 'leftHidden'}
            animate="left"
            exit={'leftHidden'}
            className="absolute lg:w-[350px] lg:h-[500px] w-[200px] h-[300px] center-img"
                ></motion.div>
          <motion.div
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? 'right' : 'left'}
            animate="center"
            className="absolute lg:w-[350px] lg:h-[500px] w-[200px] h-[300px] center-img"
      
          ></motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? 'rightHidden' : 'center'}
            animate="right"
            exit={'rightHidden'}
            className="absolute lg:w-[350px] lg:h-[500px]  w-[200px] h-[300px] center-img"
      
          ></motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
      <motion.div className="flex justify-center mt-14" >
        <motion.div className="relative lg:w-[350px] w-[200px] lg:h-[200px] h-[350px]" >
          <AnimatePresence initial={false}>
             <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? 'center' : 'leftHidden'}
            animate="left"
            exit={'leftHidden'}
              className="absolute lg:w-[350px] w-[200px] rounded-lg py-4 px-2 bg-project_black_shade hide-img"

      
            >
              <h1 className="text-project_white text-center lg:text-2xl font-bold">{BuyBooks[LeftId].title}</h1>
              <div className='flex items-center justify-center mt-3'>
                <span className="text-project_white text-xs text-center">{BuyBooks[LeftId].description}</span>
              </div>
              <div className='flex items-center justify-center flex-wrap gap-2 mt-3'>
                {BuyBooks[LeftId].buttonlink?.map((link, i) => (
                  <a href={link?.link} key={i} className="text-project_white bg-project_orange py-1 px-3 rounded-md font-semibold text-sm" target="_blank">{link?.title}</a>
                ))}
                </div>
                <p className='text-gray-300 text-xs  text-center mt-4'>{BuyBooks[LeftId].about}</p>
          </motion.div>
          <motion.div
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? 'right' : 'left'}
            animate="center"
              className="absolute lg:w-[350px]   w-[200px]  rounded-lg py-4 px-2 bg-project_black_shade hide-img"

      
            >
                <h1 className="text-project_white text-center lg:text-2xl font-bold">{BuyBooks[CenterId].title}</h1>
              <div className='flex items-center justify-center mt-3'>
                <span className="text-project_white text-xs text-center">{BuyBooks[CenterId].description}</span>
              </div>
               <div className='flex items-center justify-center flex-wrap gap-2 mt-3'>
                {BuyBooks[CenterId].buttonlink?.map((link, i) => (
                  <a href={link?.link} key={i} className="text-project_white bg-project_orange py-1 px-3 rounded-md font-semibold text-sm" target="_blank">{link?.title}</a>
                ))}
                </div>
                <p className='text-gray-300 text-xs text-center mt-4'>{BuyBooks[CenterId].about}</p>
            </motion.div>
            <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? 'rightHidden' : 'center'}
            animate="right"
            exit={'rightHidden'}
              className="absolute lg:w-[350px]  w-[200px] rounded-lg py-4 px-2 bg-project_black_shade hide-img"

      
            >
                <h1 className="text-project_white text-center lg:text-2xl font-bold">{BuyBooks[RightId].title}</h1>
              <div className='flex items-center justify-center mt-3'>
                <span className="text-project_white text-xs text-center">{BuyBooks[RightId].description}</span>
              </div>
               <div className='flex items-center justify-center flex-wrap gap-2 mt-3'>
                {BuyBooks[RightId].buttonlink?.map((link, i) => (
                  <a href={link?.link} key={i} className="text-project_white bg-project_orange py-1 px-3 rounded-md font-semibold text-sm" target="_blank">{link?.title}</a>
                ))}
                </div>
                <p className='text-gray-300 text-xs  text-center mt-4'>{BuyBooks[RightId].about}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      </motion.div>
     </div>
      <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.8}}

          className="bg-white flex items-center justify-center absolute lg:top-1/2 lg:left-10 left-[35%] top-[100%] lg:w-20 lg:h-20 w-10 h-10 rounded-full lg:mt-0  mt-10"
          onClick={prevBtn}
        >
          <MdArrowBackIos className='text-black lg:text-2xl'/>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.8}}
          className="bg-white flex items-center justify-center absolute lg:top-1/2 lg:right-10 right-[35%] top-[100%] lg:w-20 lg:h-20 w-10 h-10 rounded-full lg:mt-0 mt-10"
          onClick={nextBtn}
        >
          <MdArrowForwardIos className='text-black lg:text-2xl'/>
      </motion.button>
    </>
  )
}

export default BookSection