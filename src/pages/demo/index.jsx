import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { RiBehanceLine, RiInstagramLine, RiLinkedinLine } from '@remixicon/react'
gsap.registerPlugin(ScrollTrigger)

const index = () => {

  useEffect(() => {
    gsap.fromTo(".birds", { y: 10 }, { y: 0, duration: 1, ease: "power1.inOut", repeat: -1, yoyo: true })

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img_frame_slide_parent",
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    })

    tl.to(".img_frame_slide_child", {
      duration: 12,
      transform: "translateX(-200vw)"
    }, "pin12");

    tl.to(".india_gate", {
      bottom: "2vh",
    }, "pin12");

    tl.to(".sticker", {
      left: "24%",
      duration: 2,
      bottom: "12%",
      rotate: "360deg"
    }, "pin12");

    tl.to(".birds", {
      top: "-10%",
      left: "-12%",
    }, "pin12");

    tl.to(".pepsi", {
      bottom: "38%",
    }, "pin12");

    tl.from(".ellipse", {
      left: "15%",
    }, "pin12");

    tl.from(".car", {
      left: "28%",
    }, "pin12");

    tl.from(".royal_mile", {
      top: "-5%",
      rotate: "10deg",
      delay: .5,
    }, "pin12");

    tl.from(".sticker2", {
      left: "40%",
      top: "50%",
      duration: 2,
      rotate: "360deg",
      delay: 2.5,
    }, "pin12");

    tl.from(".piran_txt", {
      right: "60vw",
      duration: 4,
      delay: 6,
    }, "pin12");

    tl.to(".piran_picc", {
      right: "-40vw",
      duration: 3,
      delay: 12,
    }, "pin12");

    tl.to(".church", {
      left: "38%",
      duration: 3,
      delay: 12,
    }, "pin12");

    tl.to(".bgimg3", {
      bottom: "60%",
      opacity: 0,
      duration: 3,
      delay: 12,
    }, "pin12");

    tl.to(".piran_txt", {
      bottom: "30%",
      duration: 3,
      delay: 12,
    }, "pin12");

    tl.to(".footer", {
      bottom: 0,
      duration: 3,
      delay: 12,
    }, "pin12");

    tl.to(".bridge", {
      bottom: "-25%",
      duration: 3,
      delay: 12,
    }, "pin12");



  }, []);



  return (
    <div>
      <div className=" img_frame_slide_parent absolute top-0 right-[100%]  w-full h-screen overflow-hidden ">
        <div className=" img_frame_slide_child  w-[300vw] h-full bg-[#19334B] relative">
          {/* royalmile */}
          <img className=' royal_mile w-[30vw] z-[99]  absolute top-0 left-[30%]' src="/images/Slider Frame/royalMile.png" alt="" />

          {/* bgimg1 */}
          <img className=' opacity-70 w-[100vw] h-full  absolute top-0 left-0' src="/images/Slider Frame/bgimg1.png" alt="" />

          {/* bgimg2 */}
          <img className=' w-[100vw] h-full   absolute top-0 left-[32%]' src="/images/Slider Frame/bgimg2.png" alt="" />

          {/* bgimg3  */}
          <img className=' bgimg3 w-[100vw]  z-[10]  absolute bottom-0 left-[66.5%] mix-blend-darken' src="/images/Slider Frame/bgimg3.png" alt="" />

          {/* sticker 2 */}
          <img className=' sticker2 w-[16vw] z-[22] absolute top-[30%] left-[53%]' src="/images/Slider Frame/sticker2.png" alt="" />

          {/* church  */}
          <img className=' church h-full z-[20]  absolute top-0 left-[50%]' src="/images/Slider Frame/church.png" alt="" />

          {/* ellipse  */}
          <img className=' ellipse w-[30vw] opacity-30  absolute  top-[10%]  left-[12%]' src="/images/Slider Frame/Ellipse.png" alt="" />

          {/* spiral  */}
          <img className=' w-[100vw]  absolute  top-[50%]  translate-y-[-50%] left-[.5%]' src="/images/Slider Frame/spiral.png" alt="" />

          {/* india gate */}
          <img className=' india_gate w-[25vw] z-[9]  absolute -bottom-4 left-0' src="/images/Slider Frame/IndiaGate.png" alt="" />

          {/* statue  */}
          <img className=' w-[30vw]  absolute  top-[50%]  translate-y-[-50%] left-[12.5%]' src="/images/Slider Frame/statue.png" alt="" />

          {/* car  */}
          <img className=' car w-[40vw]  absolute z-[4]  bottom-[10%] left-[25%]' src="/images/Slider Frame/car.png" alt="" />

          {/* pepsi  */}
          <img className=' pepsi w-[15vw]  absolute z-[2] bottom-[34%] left-[25%]' src="/images/Slider Frame/pepsi.png" alt="" />

          {/* sticker  */}
          <img className=' sticker w-[7vw]  z-[9] absolute  bottom-[20%] left-[13%]' src="/images/Slider Frame/sticker.png" alt="" />

          {/* birds  */}
          <img className=' birds w-[70vw] z-[99]  absolute mix-blend-darken  top-[-5%] left-[-5%] opacity-40' src="/images/Slider Frame/Birds.png" alt="" />

          {/* bridge  */}
          <img className=' bridge w-[250vw]  z-[6] absolute mix-blend-darken  bottom-[-10%] left-0 ' src="/images/Slider Frame/Bridge.png" alt="" />

          {/* 2025  */}
          <img className=' w-[5vw] absolute  top-5 right-5 ' src="/images/Slider Frame/2025.png" alt="" />

          {/* piran pic  */}
          <img className=' piran_picc w-[32vw] z-[16] absolute mix-blend-plus-lighter  bottom-0 right-16 ' src="/images/Slider Frame/Piran.png" alt="" />

          {/* piran txt  */}
          <img className=' piran_txt w-[90vw] z-[16] absolute mix-blend-overlay  bottom-10 right-16 ' src="/images/Slider Frame/PiranText.png" alt="" />

          {/* footer  */}
          <div className=" footer  w-[100vw] right-0 absolute bottom-[-10vh] z-[9] bg-[#19334B] px-6 h-[10vh] flex items-center justify-between">
            <p className='text-white text-2xl'>pirantarapore@gmail.com</p>
            <div className="flex items-center gap-5">
              <div className="cursor-pointer  size-12 group hover:scale-90 transition duration-300 rounded-full text-[#19334B] center bg-[#D9D9D9]">
                <RiInstagramLine className='group-hover:scale-125 transition duration-300' />
              </div>
              <div className="cursor-pointer  size-12 group hover:scale-90 transition duration-300 rounded-full text-[#19334B] center bg-[#D9D9D9]">
                <RiLinkedinLine className='group-hover:scale-125 transition duration-300' />
              </div>
              <div className="cursor-pointer  size-12 group hover:scale-90 transition duration-300 rounded-full text-[#19334B] center bg-[#D9D9D9]">
                <RiBehanceLine className='group-hover:scale-125 transition duration-300' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default index