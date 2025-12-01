import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const MobileHero = () => {

    useEffect(() => {
        if (window.innerWidth > 1020) return
        let percent = 0;
        const el = document.querySelector(".mob_percent");

        const updatePercent = () => {
            if (percent >= 100) return;

            const increment = Math.floor(Math.random() * 10) + 2;
            percent = Math.min(100, percent + increment);

            el.textContent = percent.toString().padStart(2, "0");

            const delay = Math.random() * 200;
            setTimeout(updatePercent, delay);
        };

        updatePercent();
    }, []);


    useEffect(() => {
        if (window.innerWidth > 1020) return
        if (window.lenis) window.lenis.stop();

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflowY = "scroll";
                if (window.lenis) window.lenis.start();
            }
        });

        tl.set("body", { overflow: "hidden" })
            .to(".mob_loader_left", {
                left: "2%",
                duration: 1.8,
                ease: "expo.inOut",
                delay: 0.6
            })
            .to(".mob_loader_right", {
                right: "4%",
                duration: 1.8,
                ease: "expo.inOut",
            }, "<")
            .to(".mob_hero_bg_img", {
                transform: "translateY(0%)",
                duration: 2.5,
                ease: "expo.inOut",
            }, "<+=0.5")
            .to(".percent_paren", {
                opacity: 0,
                duration: 1,
                ease: "expo.inOut",
            }, "<+=2.5")
            .to(".mob_hero_bg_img", {
                width: "100%",
                height: "100%",
                duration: 1.5,
                ease: "expo.inOut",
            }, "<")
            .to(".mob_logo", {
                width: "94.8%",
                transform: "translateY(0)",
                duration: 1.5,
                ease: "expo.inOut",
            }, "<")
            .to(".hero_p", {
                duration: 1.5,
                stagger: 0.05,
                ease: "expo.inOut",
                transform: "translateY(0)",
            }, "<+=0.9");

        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero_paren",
                pin: true,
                scrub: true,
                start: "top top",
                // markers: true
            }
        })
        heroTimeline.to(".clip_div", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            ease: "linear",
        })
            .to(".clip_div_inner, .clip_div_inner_2", {
                top: "8vh",
                ease: "linear",
            }, "<")
            .to(".slide_box_mob", {
                right: "10%",
                ease: "linear",
            }, ">+=0.01")
    }, []);


    return (
        <>
            <div className=" hero_paren overflow-hidden w-full h-[100vh] relative">
                <div
                    className=" percent_paren absolute z-[-1] pointer-events-none w-full left-1/2 -translate-x-1/2 bottom-[30%]  center  flex-col ">
                    <div className="mob_loader_left pointer-events-none left-[23%]  text-sm absolute top-1/2 translate-y-[-50%]">
                        <p>Loading</p>
                    </div>
                    <div className=" text-sm pointer-events-none mob_percent_inc absolute  left-[50%] translate-x-[-50%]  ">
                        <p>
                            [<span className="mob_percent inline-block text-center "> 00 </span>%]
                        </p>
                    </div>
                    <div className="mob_loader_right pointer-events-none right-[20%]  text-sm absolute top-1/2 translate-y-[-50%]">
                        <p>
                            in progress
                        </p>
                    </div>

                </div>
                <div
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    }}
                    className="clip_div w-full l z-10  bg-[#FFFBF3]  overflow-hidden absolute h-[50vh]">
                    <div className=" clip_div_inner w-full absolute top-[20vh] flex flex-col md:flex-row md:items-end gap-y-1 px-3 md:pb-1 justify-end ">
                        <div className=" w-full md:flex   leading-none text-[20vw]  md:text-[12vw]">
                            <h2 className='translate-y-[2vh] md:translate-y-0'>Piran</h2>
                            <p className=' mix_light'>Tarapore</p>
                        </div>
                        <div className="w-full flex md:flex-col text-end justify-between md:items-end">
                            <div className="block w-fit overflow-hidden">
                                <p className="hero_p translate-y-[-100%]">Brand Systems Architect</p>
                            </div>
                            <div className="block w-fit overflow-hidden">
                                <p className="hero_p translate-y-[-100%]">Mumbai, India.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[50vh] absolute top-0">
                    <div className=" clip_div_inner_2 text-[#FFFBF3] z-[9] w-full absolute top-[20vh] flex flex-col md:flex-row md:items-end gap-y-1 px-3 md:pb-1 justify-end ">
                        <div className=" w-full md:flex   leading-none text-[20vw]  md:text-[12vw]">
                            <h2 className='translate-y-[2vh] md:translate-y-0'>Piran</h2>
                            <p className=' mix_light'>Tarapore</p>
                        </div>
                        <div className="w-full flex md:flex-col text-end justify-between md:items-end">
                            <div className="block w-fit overflow-hidden">
                                <p className="hero_p translate-y-[-100%]">Brand Systems Architect</p>
                            </div>
                            <div className="block w-fit overflow-hidden">
                                <p className="hero_p translate-y-[-100%]">Mumbai, India.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="  overflow-hidden w-full h-[100%] center ">
                    <img
                        className=" mob_hero_bg_img translate-y-[150%] object-cover w-[50%] h-[70%]"
                        src="/images/Hero_bg.avif"
                        alt=""
                    />
                </div>
                <div className=" slide_box_mob  absolute bottom-[5%]  w-[80%] right-[-100%] py-10 gap-y-10  p-3 text-4xl  bg-[#FFFBF3] flex flex-col justify-center items-center  text-center ">
                    <img src="	https://www.archi-malinstudio.com/_vercel/image?url=%2Fimg%2Fpicto%2Fflocon.svg&w=320&q=100" alt="" />
                    <div className=" center flex-col gap-3">
                        <p className=' text-2xl mix_light leading-none'>
                            Helping brands grow by making their story clear.</p>
                        <p className=' text-2xl mix_light leading-none'>
                            Together, we create stories that matter and strategies that work.</p>
                    </div>
                    <h2 className='text-sm uppercase'>The journey starts here.</h2>
                </div>
            </div>
        </>
    )
}

export default MobileHero