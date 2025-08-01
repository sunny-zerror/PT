import { RiInstagramLine, RiLinkedinLine } from '@remixicon/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'

const index = () => {
  useEffect(() => {

    gsap.to(".rotate", {
      rotation: 360,
      ease: "none",
      duration: 10,
      repeat: -1,
      transformOrigin: "center center",
    })

  }, [])

  return (
    <div>
      <div className="w-full h-[20vh] p-10  flex items-center justify-between">
        <div className="w-[30%] h-full">
          <p>
            I’m open to collaborations, commissions, or a good conversation. <br />
            Email me at <b>pirantarapora@gmail.com</b>
          </p>
        </div>
        <div className="w-[30%] h-full flex justify-center items-center gap-5">
          <img src="/logos/insta.svg" alt="" />
          <img src="/logos/linkedin.svg" alt="" />
        </div>
        <div className="w-[30%] flex items-center gap-10 justify-center h-full">
          <p>Copyright © 2025 . All rights reserved.</p>
          <div className="center group">
            <img className='absolute group-hover:-rotate-45 z-[9] transition-all duration-300' src="/logos/arrow-right.svg" alt="" />
            <img className='rotate' src="/logos/contact_rotate.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index