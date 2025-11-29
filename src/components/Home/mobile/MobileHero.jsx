import gsap from 'gsap';
import React, { useEffect } from 'react'

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
            duration: 1.8,
            ease: "expo.inOut",
        }, "<+=0.5")
        .to(".percent_paren", {
            opacity: 0,
            duration: 1,
            ease: "expo.inOut",
        }, "<+=1.5")
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
}, []);


    return (
        <>
            <div className="w-full h-[100svh] relative">
                <div
                    className=" percent_paren absolute pointer-events-none w-full absolute_center  center z-[10] flex-col ">
                    <div className="mob_loader_left pointer-events-none left-[23%]  text-sm absolute top-1/2 translate-y-[-50%]">
                        <p>Loading</p>
                    </div>
                    <div className="mob_loader_right pointer-events-none right-[20%]  text-sm absolute top-1/2 translate-y-[-50%]">
                        <p>
                            in progress
                        </p>
                    </div>

                    <div className=" text-sm pointer-events-none mob_percent_inc absolute translate-y-[4vh] left-[50%] translate-x-[-50%]  ">
                        <p>
                            [<span className="mob_percent inline-block text-center "> 00 </span>%]
                        </p>
                    </div>
                </div>
                <div className="w-full h-[50%] flex flex-col gap-10 pb-2 items-center justify-end">
                    <div className="px-3 w-full  flex flex-col items-end">
                        <div className="block w-fit overflow-hidden">
                            <p className="hero_p translate-y-[-100%]">Where clarity drives creativity</p>
                        </div>
                        <div className="block w-fit overflow-hidden">
                            <p className="hero_p translate-y-[-100%]">Brand Systems Architect</p>
                        </div>
                        <div className="block w-fit overflow-hidden">
                            <p className="hero_p translate-y-[-100%]">From insight to impact</p>
                        </div>
                        <div className="block w-fit overflow-hidden">
                            <p className="hero_p translate-y-[-100%]">Mumbai, India.</p>
                        </div>
                    </div>

                    <img className="w-[25%] translate-y-[3vh] mob_logo" src="/logos/Logo_Dark.svg" alt="" />
                </div>

                <div className="  overflow-hidden w-full h-[50%] center ">
                    <img
                        className=" mob_hero_bg_img translate-y-[150%] object-cover w-[50%] h-[70%]"
                        src="/images/Hero_bg.avif"
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
        </>
    )
}

export default MobileHero