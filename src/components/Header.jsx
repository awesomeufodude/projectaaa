import React, {useRef,useState} from 'react'
import { motion, useCycle } from "framer-motion";
import Logo from '../assets/PROJECT AAA- LOGO 03 GEM.png'
import HeaderSocialMediaLink from './HeaderSocialMediaLink'
import {Links} from "../constant/constantData"
import HeaderLinks from './HeaderLinks'
import { useDimensions } from "../hooks/useDimensions"
import MenuToggle from "./MenuToggle"
import Navigation from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
    
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};




function Header({booksRef, authorsRef, gamesRef, NftRef}) {
    const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
   const [active, setActive] =
    useState("Home");
  

    
  return (
      <div className='flex items-center justify-between gap-2 lg:sticky lg:top-0 lg:bg-project_black lg:z-[999]'>
          <a className='w-[20%] z-50' href="#Home">
        <img src={Logo} className="w-28 h-14 object-contain" onClick={() => {
          booksRef?.current?.scrollIntoView({behavior: "smooth"})
        }} />
          </a>
          <div className='w-[60%] lg:block hidden'>
        <HeaderLinks Links={Links} active={active} setActive={setActive} booksRef={booksRef} authorsRef={authorsRef} gamesRef={gamesRef} NftRef={NftRef} />
          </div>
          <div className='w-[20%] lg:block hidden'>
              <HeaderSocialMediaLink/>
          </div>
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
        ref={containerRef}
        className={`lg:hidden block ${isOpen && "z-50"} navbar`}
    >
      <motion.div className={`${isOpen && "absolute bg-project_black_shade top-0 bottom-0 right-0"} w-full`} variants={sidebar} />
        <Navigation active={active} setActive={setActive} Links={Links} isOpen={isOpen}  booksRef={booksRef} authorsRef={authorsRef} gamesRef={gamesRef} NftRef={NftRef}/>
      
      </motion.nav>
      <motion.div   initial={false}
        animate={isOpen ? "open" : "closed"}
        className={`${isOpen && "fixed top-[15px] right-[5px] z-[200]"} lg:hidden block`}
      >
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>
    </div>
  )
}

export default Header