import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const MobileAbout = () => {

    useEffect(() => {
        if (window.innerWidth > 1020) return
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".mob_about_paren",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })

        tl.to(".anim_txt_y", {
            transform: "translateY(0%)",
            ease: "expo.inOut",
            duration: 1,
            stagger: 0.1,
        })
        tl.to(".opaci_anim_txt", {
            opacity: 1,
            transform: "translateY(0)",
            ease: "expo.inOut",
            duration: .7,
            stagger: 0.2,
        }, "<")


        var text_anim = gsap.timeline({
            scrollTrigger: {
                trigger: ".about_brands_paren",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })
        text_anim.to(".about_brands_paren_anim_txt_y", {
            transform: "translateY(0%)",
            ease: "expo.inOut",
            duration: 1,
            stagger: 0.1,
        })
            .to(".char_span_mob", {
                opacity: 1,
                transform: "translateY(0)",
                ease: "expo.inOut",
                duration: .7,
                stagger: 0.2,
            }, "<+=0.2")

    }, [])

    return (
        <>

            <div className=" mob_about_paren p-3 py-10 slide_box_upside  w-full   ">
                <div className="block w-fit mb-6  overflow-hidden ">
                    <h2 className='text-lg uppercase  translate-y-full anim_txt_y'>My Philosophy on Brands</h2>
                </div>
                <div className="block w-fit  mb-1  overflow-hidden ">
                    <h2 className='text-sm uppercase  translate-y-full anim_txt_y'>Brand as a Living System</h2>
                </div>
                <p className='text-xl leading-none mb-5 mix_light opaci_anim_txt translate-y-2 opacity-0'>A brand isn’t just a logo or product it’s a living, evolving ecosystem made up of stories, values, and people. I help brands grow by staying connected to their true purpose while adapting to their audience.</p>
                <div className="block w-fit  mb-1  overflow-hidden ">
                    <h2 className='text-sm uppercase  translate-y-full anim_txt_y'>Story and Structure</h2>
                </div>
                <p className='text-xl leading-none mb-5 mix_light opaci_anim_txt translate-y-2 opacity-0'>Story gives meaning; structure drives progress. I combine emotional storytelling with smart systems so brands don’t just exist, they move forward with intention.</p>
                <div className="block w-fit  mb-1  overflow-hidden ">
                    <h2 className='text-sm uppercase  translate-y-full anim_txt_y'>Ethical Innovation</h2>
                </div>
                <p className='text-xl leading-none mb-5 mix_light opaci_anim_txt translate-y-2 opacity-0'>Innovation without purpose is noise. I build with awareness of people, culture and impact ensuring growth that lasts.</p>
            </div>

            <div
                className=" profile_pic aspect-[3/4] w-full">
                <img className='object-cover w-full h-full' src="/images/piran_pic_new.webp" alt="" />
            </div>


            <div className=" mt-10 about_brands_paren  w-full px-3 ">
                <div className="block w-fit mb-6  overflow-hidden ">
                    <h2 className='text-lg uppercase  translate-y-full about_brands_paren_anim_txt_y'>Building Brands That Last</h2>
                </div>
                <div className=' text-xl space-y-5  w-full'>
                    <p className=' mix_light leading-none char_span_mob opacity-0 translate-y-2 '>
                        I believe the strongest brands are built where story and strategy work together. A clear narrative shapes how people connect, and a solid plan makes sure that connection lasts.
                    </p>
                    <p className=' mix_light leading-none char_span_mob opacity-0 translate-y-2 '>
                        My role isn’t about making things look good, it’s about making sure they work. I focus on building the systems, decisions, and structures that help a brand thrive in the long run.
                    </p>
                    <p className=' mix_light leading-none char_span_mob opacity-0 translate-y-2 '>
                        Every project starts with clarity. I dig deep to understand what a brand stands for, how it operates, and where it wants to go. That understanding guides every move we make.
                    </p>
                    <p className=' mix_light leading-none char_span_mob opacity-0 translate-y-2 '>
                        From there, I align purpose with process making sure that the story a brand tells is backed by a strategy that can adapt, scale, and stay relevant.
                    </p>
                    <p className=' mix_light leading-none char_span_mob opacity-0 translate-y-2 '>
                        What follows are examples of this approach in action: work where the creative is supported by solid strategy, and where ideas are built to last.
                    </p>
                </div>
            </div>
        </>
    )
}

export default MobileAbout