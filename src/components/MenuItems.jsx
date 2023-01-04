import React from 'react'

import { motion } from "framer-motion";
import HeaderSocialMediaLink from './HeaderSocialMediaLink';


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};



function MenuItems({ active, setActive, Links, isOpen, booksRef, authorsRef, gamesRef, NftRef }) {
  const refArr = [booksRef, booksRef , authorsRef, gamesRef, NftRef]
  return (
    <>{
      Links.map((link, i) => (
        <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
        className="text-white text-2xl font-semibold cursor-pointer"
        key={i}
       
    >
          <a href={`#${link}`} className='link' data-link-name={link} onClick={(e) => {
            e.stopPropagation()
            setActive(
              e.currentTarget.getAttribute(
                ["data-link-name"]
              )
            )
            refArr[i]?.current?.scrollIntoView({behavior: "smooth"});
          }
            
          }
  
          >{link}
         {active === link && (
            <div
              className={`w-6 h-1 bg-project_orange rounded-lg absolute -bottom-2 ${
                active === link &&
                "transition-all ease-linear duration-200"
              }`}
            ></div>
          )}</a>
    </motion.li>))
    }
      <motion.li variants={variants} className="mt-10">
        <HeaderSocialMediaLink isOpen={isOpen} />
      </motion.li>
       <motion.li variants={variants} className="mt-10">
        <div className='text-center bg-project_black text-gray-500 p-2 box-border rounded-md'>
          <h1>Copyright © 2022</h1>
       </div>
      </motion.li>
    </>
  );
}

export default MenuItems