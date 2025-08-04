import { RiArrowUpLine } from '@remixicon/react'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-[16] flex items-center justify-end px-5 py-10">
        <div>
          <h2 className='text-xl'>Contact</h2>
          <div className="mt-5 capitalize flex flex-col">
            {["instagram", "linkedin", "github"].map((label) => (
              <div className="  w-fit group flex gap-1 items-center cursor-pointer relative transition duration-300">
                <h2
                  key={label}
                  className='cursor-pointer'
                >
                  <span className='group-hover:w-[75%] w-0 cursor-pointer transition-all duration-300 absolute h-[2px] bg-black/80 bottom-0' ></span>
                  {label}
                </h2>
                <img className='w-3' src="https://www.archi-malinstudio.com/img/arrow.svg" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
