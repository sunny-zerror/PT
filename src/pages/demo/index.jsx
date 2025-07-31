import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const index = () => {
  const vectorRef = useRef(null)

  // useEffect(() => {

  //   var tl = gsap.timeline({
  //     scrollTrigger:{
  //       trigger:".cont",
  //       start:"top top",
  //       markers:true,
  //       pin:true,
  //       scrub:1,
  //       end:"+=3000"
  //     }
  //   })
  //   tl.to(vectorRef.current, {
  //     width: "30vw",
  //     ease: "none",
  //     duration: 1
  //   })

  // }, [])





  return (
    <div className='center w-full bg-blue-100 overflow-hidden h-screen'>
      <div className=" cont center ">
        <div className="w-[100vw] h-[100vh] bg-black -rotate-90 center ">
          <div className="size-20 bg-green-700">
            <p>kcc;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

