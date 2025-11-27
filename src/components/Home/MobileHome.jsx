import { projectsData } from '@/data/ProjectsData';
import gsap from 'gsap';
import React, { useEffect } from 'react'

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
            <div className="w-full h-[100svh]">
                <div className="w-full h-[60%] flex flex-col gap-10 pb-2 items-center justify-end">
                    <div className=" px-3 w-full text-end ">
                        <p>Where clarity drives creativity</p>
                        <p>Brand Systems Architect</p>
                        <p>From insight to impact</p>
                        <p>Mumbai, India.</p>
                    </div>
                    <img className="w-[94.8%]" src="/logos/Logo_Dark.svg" alt="" />
                </div>

                <div className=" overflow-hidden w-full h-[40%] center ">
                    <img
                        className="object-cover w-full h-full"
                        src="https://images.prismic.io/archi-malin/Z2oIO5bqstJ98zX3_BLEUFINAL.jpg?auto=format%2Ccompress&rect=0%2C269%2C1128%2C731&w=2200&h=1425"
                        alt=""
                    />
                </div>
            </div>

            <div className="  w-full py-10 gap-y-10  p-3 text-4xl  bg-[#FFFBF3] flex flex-col justify-center items-center  text-center ">
                <img src="	https://www.archi-malinstudio.com/_vercel/image?url=%2Fimg%2Fpicto%2Fflocon.svg&w=320&q=100" alt="" />
                <div className=" center flex-col gap-3">
                    <p className=' text-3xl mix_light leading-none'>
                        Helping brands grow by making their story clear.</p>
                    <p className=' text-3xl mix_light leading-none'>
                        Together, we create stories that matter and strategies that work.</p>
                </div>
                <h2 className='text-sm uppercase'>The journey starts here.</h2>
            </div>

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
                    <p className='capitalize leading-none opacity-90 text-center text-sm  '>A shared answer to how strategy, structure, and detail create meaningful outcomes.</p>
                </div>

                <div className="w-full grid gap-x-3 gap-y-5 grid-cols-2">
                    {projectsData.map((data, i) => (
                        <div key={i} className="w-full">
                            <div className="aspect-[3/4]  center border border-black/5 w-full">
                                <img className='w-full object-contain ' src={data.image} alt="" />
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