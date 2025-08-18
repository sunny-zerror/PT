import { RiBehanceLine, RiInstagramLine, RiLinkedinLine } from '@remixicon/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'

const index = () => {

  useEffect(() => {
    gsap.to(".rotate",{
      rotate: 360,
      duration: 15,
      repeat: -1,
      ease: "linear"
    })
    
  }, [])
  
  return (
    <div>
      <div className=" footer  w-[100vw] text-white right-0 absolute bottom-[0vh] z-[9] bg-[#19334B] px-6 h-[15vh] flex items-center justify-between">
        <div className="">

        <h3 className='text-white  vvds_light' >I’m open to collaborations, commissions, or a good conversation.</h3>
        <h3 className='text-white  vvds_light' >Email me at pirantarapora@gmail.com</h3>
        </div>
        <div className="flex items-center gap-5">
          <div className="cursor-pointer  size-10 group hover:scale-90 transition duration-300 rounded-full text-[#19334B] center bg-[#D9D9D9]">
            <RiInstagramLine size={18} className='group-hover:scale-110 transition duration-300' />
          </div>
          <div className="cursor-pointer  size-10 group hover:scale-90 transition duration-300 rounded-full text-[#19334B] center bg-[#D9D9D9]">
            <RiLinkedinLine size={18} className='group-hover:scale-110 transition duration-300' />
          </div>
          <div className="cursor-pointer  size-10 group hover:scale-90 transition duration-300 rounded-full text-[#19334B] center bg-[#D9D9D9]">
            <RiBehanceLine size={18} className='group-hover:scale-110 transition duration-300' />
          </div>
        </div>
        <div className=" ml-[8vh]  flex h-full items-center gap-5">
          <h3 className='vvds_light' >Copyright © 2025 . All rights reserved.</h3>
          <div className=" h-full center group cursor-pointer">
            <img className='absolute group-hover:-rotate-45 transition duration-300' src="/logos/arrow-right.svg" alt="" />
            <img className='rotate' src="/logos/contact_rotate.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index