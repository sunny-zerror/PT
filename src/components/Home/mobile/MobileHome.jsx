import { projectsData } from '@/data/ProjectsData';
import gsap from 'gsap';
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import MobileHero from './MobileHero';
gsap.registerPlugin(ScrollTrigger)

const MobileHome = () => {

    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".span_mob_paren",
                start: "top 70%",
                end: "bottom 30%",
                scrub: true,
            }
        })
        tl.to(".span_mob_1", {
            opacity: 0.05,
            delay: 0.1,
            duration: .05,
        }, "pin5");
        tl.fromTo(".span_mob_2", {
            opacity: 0.05,
        }, {
            opacity: 1,
            delay: 0.15,
            duration: .05,
        }, "pin5");

        tl.to(".span_mob_2", {
            opacity: 0.05,
            duration: .05,
            delay: 0.35,
        }, "pin5");
        tl.fromTo(".span_mob_3", {
            opacity: 0.05,
        }, {
            opacity: 1,
            delay: 0.35,
            duration: .05,
        }, "pin5");
        tl.to(".span_mob_3", {
            opacity: 0.05,
            duration: .05,
            delay: 0.65,
        }, "pin5");
        tl.fromTo(".span_mob_4", {
            opacity: 0.05,
        }, {
            opacity: 1,
            delay: 0.65,
            duration: .05,
        }, "pin5");
        tl.to(".span_mob_4", {
            opacity: 0.05,
            duration: .05,
            delay: 0.95,
        }, "pin5");
        tl.fromTo(".span_mob_5", {
            opacity: 0.05,
        }, {
            opacity: 1,
            delay: 0.95,
            duration: .05,
        }, "pin5");
    }, [])


    return (
        <>

            <MobileHero/>



            <div
                className=" profile_pic aspect-[3/4] w-full">
                <img className='object-cover w-full h-full' src="/images/piran_pic_new.webp" alt="" />
            </div>

            <div className=" p-3 py-10 slide_box_upside  w-full   ">
                <h2 className='text-sm uppercase mb-6'>My Philosophy on Brands</h2>
                <h2 className='text-sm'>Brand as a Living System</h2>
                <p className='text-lg leading-none mb-5 mix_light'>A brand isn’t just a logo or product it’s a living, evolving ecosystem made up of stories, values, and people. I help brands grow by staying connected to their true purpose while adapting to their audience.</p>
                <h2 className='text-sm'>Story and Structure</h2>
                <p className='text-lg leading-none mb-5 mix_light'>Story gives meaning; structure drives progress. I combine emotional storytelling with smart systems so brands don’t just exist, they move forward with intention.</p>
                <h2 className='text-sm'>Ethical Innovation</h2>
                <p className='text-lg leading-none mb-5 mix_light'>Innovation without purpose is noise. I build with awareness of people, culture and impact ensuring growth that lasts.</p>
            </div>

            <div className=" span_mob_paren w-full px-3 ">
                <h2 className='text-sm uppercase mb-6'>Building Brands That Last</h2>
                <h2 className=' text-lg w-full  text-justify  leading-none'>
                    <span className=' span_mob_1 vvds_light'>
                        I believe the strongest brands are built where story and strategy work together. A clear narrative shapes how people connect, and a solid plan makes sure that connection lasts.
                    </span>
                    <span className=' span_mob_2 vvds_light opacity-[.1]'>
                        My role isn’t about making things look good, it’s about making sure they work. I focus on building the systems, decisions, and structures that help a brand thrive in the long run.
                    </span>
                    <span className=' span_mob_3 vvds_light opacity-[.1]'>
                        Every project starts with clarity. I dig deep to understand what a brand stands for, how it operates, and where it wants to go. That understanding guides every move we make.
                    </span>
                    <span className=' span_mob_4 vvds_light opacity-[.1]'>
                        From there, I align purpose with process making sure that the story a brand tells is backed by a strategy that can adapt, scale, and stay relevant.
                    </span>
                    <span className=' span_mob_5 vvds_light opacity-[.1]'>
                        What follows are examples of this approach in action: work where the creative is supported by solid strategy, and where ideas are built to last.
                    </span> &nbsp;
                </h2>
            </div>

            <div className=" px-3 py-10">
                <div className="w-full  center flex-col gap-3 text-black bg-[#FFFBF3]">
                    <h2 className='uppercase  text-sm '>Projects</h2>
                    <h2 className='capitalize text-3xl vvds_light'>Built on Purpose</h2>
                    <p className='capitalize w-[80%] leading-none opacity-90 text-center text-sm  '>A shared answer to how strategy, structure, and detail create meaningful outcomes.</p>
                </div>

                <div className="w-full grid gap-x-3 mt-5 gap-y-5 grid-cols-2 md:grid-cols-4">
                    {projectsData.map((data, i) => (
                        <div key={i} className="w-full">
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

export default MobileHome