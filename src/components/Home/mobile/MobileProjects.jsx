import { projectsData } from '@/data/ProjectsData';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const MobileProjects = () => {

    useEffect(() => {

        if (window.innerWidth > 1020) return


        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".projects_paren",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })
        tl.to(".prj_anim_txt_y", {
            transform: "translateY(0%)",
            ease: "expo.inOut",
            duration: 1,
            stagger: 0.1,
        })
            .to(".proj_span_mob", {
                opacity: 1,
                transform: "translateY(0)",
                ease: "expo.inOut",
                duration: .7,
                stagger: 0.2,
            }, "<+=0.2")
            .to(".project", {
                opacity: 1,
                transform: "translateY(0)",
                ease: "expo.inOut",
                duration: .7,
                stagger: 0.1,
            }, "<+=0.2")

    }, [])


    return (
        <>
            <div className=" projects_paren px-3 py-10">
                <div className="w-full  center flex-col gap-3 text-black bg-[#FFFBF3]">
                    <div className="block w-fit   overflow-hidden ">
                        <h2 className='text-lg uppercase  translate-y-full prj_anim_txt_y'>Projects</h2>
                    </div>
                    <div className="block w-fit   overflow-hidden ">
                        <h2 className='text-3xl capitalize vvds_light  translate-y-full prj_anim_txt_y'>Built on Purpose</h2>
                    </div>
                    <p className='capitalize w-[90%] proj_span_mob  leading-none opacity-0 translate-y-2 text-center text-base  '>A shared answer to how strategy, structure, and detail create meaningful outcomes.</p>
                </div>

                <div className="w-full grid gap-x-3 mt-5 gap-y-5 grid-cols-2 md:grid-cols-4">
                    {projectsData.map((data, i) => (
                        <div key={i} className="w-full project translate-y-3 opacity-0">
                            <div className="aspect-square overflow-hidden  center  w-full">
                                <img className='object-cover w-full h-full ' src={data.image} alt="" />
                            </div>
                            <h2 className=' text-sm uppercase  mt-1 leading-none'>{data.title}</h2>
                            <h2 className=' text-sm vvds_light leading-none mt-1 capitalize'>{data.service}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MobileProjects