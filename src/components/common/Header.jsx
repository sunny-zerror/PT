import { RiArrowUpLine } from '@remixicon/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'

const Header = () => {


  useEffect(() => {
    gsap.set(".lin", { y: -10, opacity: 0 })
    gsap.to(".lin", {
      y: 0,
      opacity: 1,
      delay: 5.5,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out",
    })

  }, [])


  return (
    <div>
      <div className="absolute top-0 w-full z-[16] flex items-center justify-end p-5">
        <div cla>
          <div className="  flex flex-col text-end items-end overflow-hidden">
            <h2 className=' lin opacity-0 text-xl'>Contact</h2>
          </div>
          <div className="mt-5 capitalize flex flex-col text-end items-end">
            {["instagram", "linkedin", "github"].map((label,i) => (
              <div key={i}  className=" w-fit overflow-hidden group flex gap-1 items-center justify-end cursor-pointer relative transition duration-300">
                <h2
                  key={label}
                  className='cursor-pointer lin opacity-0  '
                >
                  <span className=' group-hover:w-[100%] w-0 cursor-pointer transition-all duration-300 absolute h-[2px] bg-black/80 bottom-0' ></span>
                  {label}
                </h2>
                <img className='w-3 lin opacity-0  ' src="https://www.archi-malinstudio.com/img/arrow.svg" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
