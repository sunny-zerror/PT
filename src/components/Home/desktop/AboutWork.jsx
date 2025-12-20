import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const AboutWork = () => {

    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about_work_paren",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })
        tl.from(".spn_other_above", {
            top: "50%"
        })
        tl.from(".spn_other_below", {
            bottom: "50%"
        }, "<")
    })

    return (
        <>
            <div className=" about_work_paren w-full h-[300vh]">
                <div className="w-full text-[#6BB7CF] sticky top-0 h-[100vh]">

                    <h2 className='absolute top-1/2 -translate-y-1/2 z-[12] left-1/2 text-3xl font-semibold text-black -translate-x-1/2'>MY APPROACH</h2>

                    <div className=" spn_other_above top-[8%]  -translate-y-1/2 py-2 absolute z-[4] w-full  bg-[#fffbf3] center">
                        <img className='w-[97%] opacity-20' src="/images/how_i_work_txt.png" alt="" />
                    </div>
                    <div className=" spn_other_above top-[22%] -translate-y-1/2 py-2 absolute z-[6] w-full  bg-[#fffbf3] center">
                        <img className='w-[97%] opacity-30' src="/images/how_i_work_txt.png" alt="" />
                    </div>
                    <div className=" spn_other_above top-[36%]  -translate-y-1/2 py-2 absolute z-[8] w-full  bg-[#fffbf3] center">
                        <img className='w-[97%] opacity-60' src="/images/how_i_work_txt.png" alt="" />
                    </div>
                    <div className=" spn_center top-1/2  -translate-y-1/2 py-2 absolute z-[10] w-full bg-[#fffbf3] center">
                        <img className='w-[97%]' src="/images/how_i_work_txt.png" alt="" />
                    </div>
                    <div className=" spn_other_below bottom-[36%]  translate-y-1/2 py-2 absolute z-[8] w-full  bg-[#fffbf3] center">
                        <img className='w-[97%] opacity-60' src="/images/how_i_work_txt.png" alt="" />
                    </div>
                    <div className=" spn_other_below bottom-[22%] translate-y-1/2 py-2 absolute z-[6] w-full  bg-[#fffbf3] center">
                        <img className='w-[97%] opacity-30' src="/images/how_i_work_txt.png" alt="" />
                    </div>
                    <div className=" spn_other_below bottom-[8%]  translate-y-1/2 py-2 absolute z-[4] w-full  bg-[#fffbf3] center">
                        <img className='w-[97%] opacity-20' src="/images/how_i_work_txt.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutWork