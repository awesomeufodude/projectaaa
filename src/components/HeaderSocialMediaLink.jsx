import React from 'react'
import { FaDiscord, FaInstagram, FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa'

function HeaderSocialMediaLink({isOpen}) {
  return (
    <div className={`flex items-center justify-center  w-full text-gray-400`}>
                  <div className='flex items-center gap-5'>
                  <a href="#" aria-disabled={!isOpen}><FaDiscord className='hover:text-indigo-500'/></a>
                  <a href="#" aria-disabled={!isOpen}><FaTwitter className='hover:text-blue-500'/></a>
                  <a href="#" aria-disabled={!isOpen}><FaInstagram className='hover:text-fuchsia-500'/></a>
                  <a href="#" aria-disabled={!isOpen}><FaFacebook className='hover:text-blue-700' /></a>
                  <a href="#" aria-disabled={!isOpen}><FaTiktok className='hover:text-pink-500'/>
  </a>               </div>
              </div>
  )
}

export default HeaderSocialMediaLink