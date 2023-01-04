import React from 'react'
import { motion } from "framer-motion";
import MenuItems from "./MenuItems";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};




function Navigation({active, setActive, Links, isOpen, booksRef, authorsRef, gamesRef, NftRef}) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center box-border">
      <motion.ul variants={variants} className={`flex flex-col gap-8 ${isOpen ? "visible" : "invisible"}`}>
        <MenuItems active={active} setActive={setActive} Links={Links} isOpen={isOpen} booksRef={booksRef} authorsRef={authorsRef} gamesRef={gamesRef} NftRef={NftRef} />
      </motion.ul>
    </div>
  )
}

export default Navigation