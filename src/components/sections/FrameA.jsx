import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FrameA = () => {
    const main_Ref = useRef(null);
    const logoRef = useRef(null);
    const clipRef = useRef(null);

    useEffect(() => {


        gsap.set(".logo_div", {
            y: 15,
            scale: 0.3
        })
        gsap.set(".clip_container", {
            top: "100%",
            width: "30%",
        })

        gsap.to(".loader_left", {
            left: "3%",
            duration: 2,
            ease: "expo.inOut",
            delay: 1
        })
        gsap.to(".loader_right", {
            right: "3%",
            duration: 2,
            ease: "expo.inOut",
            delay: 1
        })

        gsap.to(".logo_div", {
            y: 0,
            scale: 1,
            duration: 2,
            ease: "expo.inOut",
            delay: 4
        })
        gsap.to(".clip_container", {
            top: "-15%",
            duration: 2,
            ease: "expo.inOut",
            delay: 2
        })
        gsap.to(".clip_container", {
            top: 0,
            width: "100%",
            duration: 2,
            ease: "expo.inOut",
            delay: 4
        })
        gsap.to(".loader_left, .loader_right, .percent_inc", {
            opacity: 0,
            duration: 1,
            ease: "expo.inOut",
            delay: 4
        })
        gsap.fromTo(".short_desc p, .short_desc h2", {
            y: 100
        }, {
            y: 0,
            duration: 2,
            ease: "expo.inOut",
            delay: 5.5
        })
        gsap.to(".loader_left, .loader_right, .percent_inc", {
            display: "none",
            duration: 0,
            ease: "expo.inOut",
            delay: 5.5
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: main_Ref.current,
                start: "top top",
                end: "+=4000",
                scrub: true,
                pin: true,
                // markers: true,
            },
        });

        tl.to(logoRef.current, {
            top: "20%",
            ease: "ease.out"
        }, "pin");

        tl.to(clipRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            ease: "ease.out"
        }, "pin");

        tl.to(".profile_pic", {
            bottom: "0%",
            ease: "ease.out"
        });

        tl.to(".slide_box", {
            left: "50%",
            ease: "ease.out"
        });

        tl.to(".slide_box", {
            left: "12.5%",
            ease: "ease.out"
        }, "pin2");

        tl.to(".profile_pic", {
            height: "100vh",
            width: "100%",
            ease: "ease.out"
        }, "pin2");

        tl.to(logoRef.current, {
            top: "-20%",
            ease: "ease.out"
        }, "pin2");


        tl.to(".slide_box", {
            left: "-13%",
            ease: "ease.out"
        }, "pin3");

        tl.to(".slide_box_upside", {
            bottom: "100%",
            duration: 2,
        }, "pin3");





    }, []);

    useEffect(() => {
        let percent = 0;
        const el = document.querySelector(".percent");

        const updatePercent = () => {
            if (percent >= 100) return;

            const increment = Math.floor(Math.random() * 10) + 2;
            percent = Math.min(100, percent + increment);

            el.textContent = percent.toString().padStart(2, "0");

            const delay = Math.random() * 300;
            setTimeout(updatePercent, delay);
        };

        updatePercent();
    }, []);

    return (
        <div>
            <div ref={main_Ref} className="h-screen w-full relative">
                <div
                    ref={clipRef}
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)",
                    }}
                    className=" bg-[#FFFBF3] absolute w-full h-screen z-[9] center flex-col absolute_center"
                >
                </div>
                <div
                    ref={logoRef}
                    className="absolute w-full absolute_center center z-[9] flex-col ">
                    <div className=" logo_div  center  w-full">
                        <img className="w-full" src="/logos/MainLogo.png" alt="" />
                    </div>

                    <div className=" short_desc w-full px-10  overflow-hidden text-[16px] flex items-center justify-between">
                        <p>3D ideas, big projects</p>
                        <h2>Antoine</h2>
                        <p>Freelance 3D Graphic Designer</p>
                        <h2 className="text-[12px]">Based in Toulouse, France</h2>
                    </div>

                    <div className="loader_left pointer-events-none left-[25%]  text-xl absolute top-1/2 translate-y-[-50%]">
                        <p>Loading</p>
                    </div>
                    <div className="loader_right pointer-events-none right-[25%]  text-xl absolute top-1/2 translate-y-[-50%]">
                        <p>
                            in progress
                        </p>
                    </div>

                    <div className=" pointer-events-none percent_inc absolute top-[62%] left-[50%] translate-x-[-50%]  ">
                        <p>
                            [<span className="percent inline-block text-center "> 00 </span>%]
                        </p>
                    </div>




                </div>

                <div
                    className="clip_container overflow-hidden absolute top-0 left-1/2 translate-x-[-50%] w-full h-full flex items-center justify-center"
                >
                    <img
                        className="object-cover w-full h-full"
                        src="https://images.prismic.io/archi-malin/Z2oIO5bqstJ98zX3_BLEUFINAL.jpg?auto=format%2Ccompress&rect=0%2C269%2C1128%2C731&w=2200&h=1425"
                        alt=""
                    />
                </div>

                <div
                    className=" profile_pic absolute bottom-[-100%] absolute_x_center w-[35%]  h-[80vh]">
                    <img className='object-cover w-full h-full' src="https://images.prismic.io/archi-malin/Z-5c0ndAxsiBwQ87_FINALPERSSITE.jpg?auto=format,compress&rect=168,0,2223,1440&w=2200&h=1425" alt="" />
                </div>

                <div className=" slide_box -translate-x-1/2 w-[25vw] p-5 text-[1.2vw] absolute h-[60vh] bg-white bottom-0  left-[125%] text-center center">
                    <p>I’m Piran, a brand strategist, philosopher and someone who’s always been fascinated by how people and patterns connect. I grew up in Mumbai, where life was fast, full, and full of feeling. Later, design gave me structure, and college taught me to breathe between the lines. I’ve worked across industries, but my approach stays the same — slow down, ask better questions, and build something that feels like it belongs. This isn’t just a portfolio. It’s a peek into what shaped the lens I use today. </p>
                </div>

                <div className=" slide_box_upside  w-[40vw]   absolute text-white   bottom-[-150%]  right-0 ">
                    <h2 className='text-xl mb-6'>What I believe and follow</h2>
                    <h2 className='text-xl'>Brand as a Living System</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>A brand isn’t just a logo — it’s a living, evolving ecosystem. The strongest ones grow with their audience and stay rooted in purpose.</p>
                    <h2 className='text-xl'>Story and Structure</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>Story creates meaning. Structure creates momentum. I build brands where emotion and systems work together — with intention, not accident.</p>
                    <h2 className='text-xl'>Ethical Innovation</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>Innovation without intention is just noise. I design with awareness — of people, context, and long-term impact</p>
                </div>
            </div>
        </div>
    );
};

export default FrameA;
