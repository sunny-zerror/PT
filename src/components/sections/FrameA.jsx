import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FrameA = () => {
    const main_Ref = useRef(null);
    const logoRef = useRef(null);
    const logoRef2 = useRef(null);
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
            duration: 3.5,
            ease: "expo.inOut",
            delay: 1
        })
        gsap.to(".loader_right", {
            right: "3%",
            duration: 3.5,
            ease: "expo.inOut",
            delay: 1
        })

        gsap.to(".logo_div", {
            y: 0,
            scale: 1,
            duration: 1.8,
            ease: "expo.inOut",
            delay: 4
        })
        gsap.to(".clip_container", {
            top: "-20%",
            duration: 1.8,
            ease: "expo.inOut",
            delay: 2.2
        })
        gsap.to(".clip_container", {
            top: 0,
            width: "100%",
            duration: 2,
            ease: "expo.inOut",
            delay: 3.9
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
                end: window.innerHeight * 20,
                scrub: true,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                // markers: true,
            }

        });


        tl.to([logoRef.current, logoRef2.current], {
            top: "20%",
            ease: "ease.out"
        }, "pin");

        tl.to(clipRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            ease: "ease.out"
        }, "pin");

        tl.to(".profile_pic", {
            bottom: "0%",
            duration: 1,
            ease: "ease.out"
        });

        tl.to(".slide_box", {
            left: "50%",
            duration: 1,
            ease: "ease.out"
        });

        tl.to(".slide_box", {
            left: "12.5%",
            duration: 1,
            ease: "ease.out"
        }, "pin2");

        tl.to(".profile_pic", {
            height: "100vh",
            width: "100%",
            duration: 1,
            ease: "ease.out"
        }, "pin2");

        tl.to(logoRef.current, {
            top: "-20%",
            ease: "ease.out"
        }, "pin2");
        tl.to(logoRef2.current, {
            top: "-20%",
            ease: "ease.out"
        }, "pin2");


        tl.to(".slide_box", {
            left: "-13%",
            ease: "ease.out",
            duration: 1,
        }, "pin3");

        tl.to(".slide_box_upside", {
            bottom: "100%",
            duration: 3,
        }, "pin3");

        tl.to(".profile_pic", {
            left: "0%",
            duration: 2,
        }, "pin4");

        tl.to(".frameB", {
            left: "0%",
            duration: 2,
        }, "pin4");
        tl.fromTo(".spn_slide", {
            top: "35%",
        }, {
            top: "-150%",
            duration: 1.8,
        }, "pin5");

        tl.to(".spn_1", {
            opacity: 0.05,
            delay: 0.1,
            duration: .05,
        }, "pin5");
        tl.fromTo(".spn_2", {
            opacity: 0.05,
        }, {
            opacity: 1,
            delay: 0.15,
            duration: .05,
        }, "pin5");

        tl.to(".spn_2", {
            opacity: 0.05,
            duration: .05,
            delay: 0.35,
        }, "pin5");
        tl.fromTo(".spn_3", {
            opacity: 0.05,
        }, {
            opacity: 1,
            delay: 0.35,
            duration: .05,
        }, "pin5");
        tl.to(".spn_3", {
            opacity: 0.05,
            duration: .05,
            delay: 0.65,
        }, "pin5");
        tl.fromTo(".spn_4", {
            opacity: 0.05,
        }, {
            opacity: 1,
            delay: 0.65,
            duration: .05,
        }, "pin5");
        tl.to(".spn_4", {
            opacity: 0.05,
            duration: .05,
            delay: 0.95,
        }, "pin5");
        tl.fromTo(".spn_5", {
            opacity: 0.05,
        }, {
            opacity: 1,
            delay: 0.95,
            duration: .05,
        }, "pin5");

        tl.fromTo(".spn_img_slider", {
            top: "0%",
        }, {
            top: "-175%",
            duration: 3,
        }, "pin5.5");


        tl.to(".frame_slider", {
            top: 0,
            duration: 2
        }, "pin6")

        tl.to(".frame_slider", {
            top: "-30%",
            duration: 2
        }, "pin7")

        tl.to(".frame_slide_1", {
            transform: "translateY(-100vh)",
            duration: 4
        }, "pin7")
        tl.to(".frame_slide_2", {
            transform: "translateY(-50vh)",
            duration: 4
        }, "pin7")
        tl.to(".frame_slide_3", {
            transform: "translateY(-110vh)",
            duration: 4
        }, "pin7")
        tl.to(".frame_slide_4", {
            transform: "translateY(-80vh)",
            duration: 4
        }, "pin7")

        tl.to(".cont", {
            width: "20vh",
            height: "20vh",
            clipPath: "shape(nonzero from 75.26% 81.49%, line to 52.41% 81.49%, curve to 50.71% 82.93% with 50.71% 81.49% / 50.71% 81.49%, curve to 50.7% 98.64% with 50.71% 88.17% / 50.71% 93.41%, curve to 50.07% 100% with 50.7% 99.16% / 50.96% 99.95%, curve to 49.2% 98.73% with 49.24% 100.04% / 49.29% 99.25%, curve to 44.22% 84.47% with 48.4% 93.75% / 46.64% 89.03%, curve to 36.7% 74.09% with 42.26% 80.73% / 39.73% 77.24%, curve to 21.94% 63.3% with 32.56% 69.76% / 27.56% 66.11%, curve to 1.2% 57.08% with 15.46% 60.09% / 8.53% 58.09%, curve to 0% 56.43% with 0.68% 57.01% / -0.05% 57.1%, curve to 1.31% 55.9% with 0.06% 55.79% / 0.79% 55.9%, curve to 33.42% 55.9% with 12.01% 55.89% / 22.72% 55.89%, curve to 36.1% 55.9% with 34.32% 55.9% / 35.21% 55.9%, curve to 36.76% 55.69% with 36.34% 55.9% / 36.66% 55.96%, curve to 36.45% 55.21% with 36.83% 55.48% / 36.58% 55.35%, curve to 22.05% 44.68% with 32.4% 50.92% / 27.53% 47.46%, curve to 7.03% 39.44% with 17.36% 42.3% / 12.3% 40.54%, curve to 1.03% 38.43% with 5.05% 39% / 3.05% 38.67%, curve to 0.09% 37.8% with 0.57% 38.38% / 0.09% 38.32%, curve to 1.07% 37.27% with 0.09% 37.22% / 0.63% 37.29%, curve to 2.03% 37.27% with 1.39% 37.26% / 1.71% 37.27%, line to 35.2% 37.27%, curve to 36.05% 37.27% with 35.48% 37.27% / 35.77% 37.28%, curve to 36.74% 37.09% with 36.3% 37.26% / 36.62% 37.34%, curve to 36.43% 36.52% with 36.86% 36.84% / 36.59% 36.68%, curve to 30.63% 31.36% with 34.64% 34.69% / 32.7% 32.96%, curve to 18.49% 24.36% with 26.96% 28.57% / 22.87% 26.21%, curve to 1.29% 19.8% with 13.03% 22.06% / 7.32% 20.48%, curve to 0.82% 19.72% with 1.13% 19.79% / 0.98% 19.76%, curve to 0.09% 19.08% with 0.44% 19.63% / 0.06% 19.51%, curve to 0.9% 18.52% with 0.12% 18.65% / 0.5% 18.55%, curve to 1.95% 18.5% with 1.26% 18.5% / 1.6% 18.5%, line to 47.75% 18.5%, curve to 49.39% 17.09% with 49.39% 18.5% / 49.39% 18.5%, line to 49.39% 2.05%, curve to 49.39% 1.3% with 49.39% 1.8% / 49.36% 1.55%, curve to 49.99% 0% with 49.44% 0.81% / 49.17% 0.06%, curve to 50.73% 1.19% with 50.88% -0.06% / 50.62% 0.71%, curve to 52.3% 7.44% with 51.21% 3.29% / 51.62% 5.38%, curve to 58.13% 19.42% with 53.66% 11.63% / 55.62% 15.66%, curve to 64.58% 27.13% with 59.97% 22.18% / 62.13% 24.76%, curve to 77.92% 36.6% with 68.47% 30.88% / 72.88% 34.08%, curve to 92.85% 41.81% with 82.59% 38.94% / 87.61% 40.69%, curve to 99.12% 42.89% with 94.93% 42.25% / 97.02% 42.56%, curve to 100% 43.47% with 99.54% 42.96% / 100.01% 42.98%, curve to 99.04% 44.07% with 99.99% 44% / 99.5% 44.04%, curve to 98.08% 44.08% with 98.72% 44.09% / 98.4% 44.08%, line to 64.82% 44.08%, curve to 63.96% 44.08% with 64.53% 44.08% / 64.24% 44.08%, curve to 63.36% 44.25% with 63.74% 44.09% / 63.48% 44.04%, curve to 63.62% 44.75% with 63.25% 44.47% / 63.48% 44.6%, curve to 69.96% 50.37% with 65.52% 46.79% / 67.65% 48.67%, curve to 85.45% 58.44% with 74.59% 53.77% / 79.82% 56.5%, curve to 98.81% 61.51% with 89.75% 59.93% / 94.23% 60.96%, line to 99.09% 61.54%, curve to 99.98% 62.2% with 99.55% 61.6% / 100.04% 61.67%, curve to 98.95% 62.71% with 99.92% 62.74% / 99.39% 62.69%, curve to 98% 62.71% with 98.63% 62.72% / 98.31% 62.71%, curve to 64.64% 62.72% with 86.88% 62.71% / 75.76% 62.71%, curve to 63.34% 62.95% with 64.19% 62.72% / 63.56% 62.49%, curve to 64.01% 63.88% with 63.16% 63.33% / 63.73% 63.59%, curve to 73.86% 71.71% with 66.9% 66.84% / 70.21% 69.47%, curve to 85.25% 77.08% with 77.41% 73.86% / 81.24% 75.66%, curve to 97.46% 80.08% with 89.19% 78.49% / 93.31% 79.32%, curve to 99.34% 80.31% with 98.08% 80.19% / 98.72% 80.22%, curve to 99.98% 80.9% with 99.71% 80.36% / 100.03% 80.51%, curve to 99.24% 81.45% with 99.92% 81.26% / 99.62% 81.42%, curve to 98.19% 81.48% with 98.89% 81.48% / 98.54% 81.49%, line to 75.26% 81.49%, close)",
            duration: 2,
            backgroundColor: "#18293A"
        }, "pin8")
        tl.to(".cont_child", {
            opacity: 0,
            duration: 1,
            delay: 1
        }, "pin8")





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
                    className=" bg-[#FFFBF3] absolute w-full h-screen z-[10] center flex-col absolute_center"
                >
                    <div
                        ref={logoRef}
                        className=" absolute w-full absolute_center">
                        <div className=" logo_div  center   w-full">
                            <img className="w-[94.8%]" src="/logos/Logo_Dark.svg" alt="" />
                        </div>

                        <div className=" short_desc w-full px-10 py-2  overflow-hidden text-[16px] flex items-center justify-between">
                            <p>3D ideas, big projects</p>
                            <h2>Antoine</h2>
                            <p>Freelance 3D Graphic Designer</p>
                            <h2 className="text-[12px]">Based in Toulouse, France</h2>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute w-full absolute_center  center z-[10] flex-col ">

                    <div className="loader_left pointer-events-none left-[25%]  text-xl absolute top-1/2 translate-y-[-50%]">
                        <p>Loading</p>
                    </div>
                    <div className="loader_right pointer-events-none right-[25%]  text-xl absolute top-1/2 translate-y-[-50%]">
                        <p>
                            in progress
                        </p>
                    </div>

                    <div className=" pointer-events-none percent_inc absolute top-[62%] translate-y-[100%] left-[50%] translate-x-[-50%]  ">
                        <p>
                            [<span className="percent inline-block text-center "> 00 </span>%]
                        </p>
                    </div>




                </div>

                <div
                    className="clip_container overflow-hidden absolute top-0 left-1/2 translate-x-[-50%] w-full h-full center "
                >

                    <img
                        className="object-cover w-full h-full"
                        src="https://images.prismic.io/archi-malin/Z2oIO5bqstJ98zX3_BLEUFINAL.jpg?auto=format%2Ccompress&rect=0%2C269%2C1128%2C731&w=2200&h=1425"
                        alt=""
                    />
                </div>
                <div
                    ref={logoRef2}
                    className=" absolute absolute_center w-full z-[9]">

                    <div className=" logo_div  center   w-full">
                        <img className="w-[94.8%]" src="/logos/Logo_Light.svg" alt="" />
                    </div>

                    <div className=" short_desc w-full px-10 py-2 text-[#fffbf3]  overflow-hidden text-[16px] flex items-center justify-between">
                        <p>3D ideas, big projects</p>
                        <h2>Antoine</h2>
                        <p>Freelance 3D Graphic Designer</p>
                        <h2 className="text-[12px]">Based in Toulouse, France</h2>
                    </div>
                </div>
                <div
                    className=" profile_pic absolute z-[8] bottom-[-100%] absolute_x_center w-[35%]  h-[80vh]">
                    <img className='object-cover w-full h-full' src="https://images.prismic.io/archi-malin/Z-5c0ndAxsiBwQ87_FINALPERSSITE.jpg?auto=format,compress&rect=168,0,2223,1440&w=2200&h=1425" alt="" />
                </div>

                <div className=" slide_box z-[10] -translate-x-1/2 w-[25vw] p-5 text-[1.2vw] absolute h-[60vh] bg-white bottom-0  left-[125%] text-center center">
                    <p>I’m Piran, a brand strategist, philosopher and someone who’s always been fascinated by how people and patterns connect. I grew up in Mumbai, where life was fast, full, and full of feeling. Later, design gave me structure, and college taught me to breathe between the lines. I’ve worked across industries, but my approach stays the same — slow down, ask better questions, and build something that feels like it belongs. This isn’t just a portfolio. It’s a peek into what shaped the lens I use today. </p>
                </div>

                <div className=" slide_box_upside  w-[40vw] z-[10] absolute text-white   bottom-[-150%]  right-0 ">
                    <h2 className='text-xl mb-6'>What I believe and follow</h2>
                    <h2 className='text-xl'>Brand as a Living System</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>A brand isn’t just a logo — it’s a living, evolving ecosystem. The strongest ones grow with their audience and stay rooted in purpose.</p>
                    <h2 className='text-xl'>Story and Structure</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>Story creates meaning. Structure creates momentum. I build brands where emotion and systems work together — with intention, not accident.</p>
                    <h2 className='text-xl'>Ethical Innovation</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>Innovation without intention is just noise. I design with awareness — of people, context, and long-term impact</p>
                </div>

                <div className=" frameB  w-full h-screen z-[12] bg-[#FFFBF3] absolute top-0 left-[100%]">

                    <div className=" absolute top-0 left-0 spn_slide w-[75%]">
                        <h2 className='text-black text-[4.5vw] p-4 leading-none'>
                            <span className='spn_1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur repudiandae sit perspiciatis dolore. Vel, aspernatur? Itaque, alias. Velit, quibusdam.</span> &nbsp;
                            <span className='spn_2 opacity-[.1]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur repudiandae sit perspiciatis dolore. Vel, aspernatur? Itaque, alias. Velit, quibusdam.</span> &nbsp;
                            <span className='spn_3 opacity-[.1]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur repudiandae sit perspiciatis dolore. Vel, aspernatur? Itaque, alias. Velit, quibusdam.</span> &nbsp;
                            <span className='spn_4 opacity-[.1]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur repudiandae sit perspiciatis dolore. Vel, aspernatur? Itaque, alias. Velit, quibusdam.</span> &nbsp;
                            <span className='spn_5 opacity-[.1]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur repudiandae sit perspiciatis dolore. Vel, aspernatur? Itaque, alias. Velit, quibusdam.</span> &nbsp;
                        </h2>
                    </div>

                    <div className=" spn_img_slider p-5 w-[25%] text-black absolute right-0 top-0">
                        <div className="w-full">
                            <div className="h-[60vh] w-full">
                                <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/livre.jpg" alt="" />
                            </div>
                            <h2 className='capitalize text-xl'>Project Name</h2>
                        </div>
                        <div className="w-full mt-10">
                            <div className="h-[60vh] w-full">
                                <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/1.webp" alt="" />
                            </div>
                            <h2 className='capitalize text-xl'>Project Name</h2>
                        </div>
                        <div className="w-full mt-10">
                            <div className="h-[60vh] w-full">
                                <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/poffy.jpg" alt="" />
                            </div>
                            <h2 className='capitalize text-xl'>Project Name</h2>
                        </div>
                        <div className="w-full mt-10">
                            <div className="h-[60vh] w-full">
                                <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                            </div>
                            <h2 className='capitalize text-xl'>Project Name</h2>
                        </div>
                    </div>

                </div>
                <div className="frame_slider absolute top-[100%]  left-0 w-full  bg-[#FFFBF3] z-[14]">

                    <div className="w-full h-[30vh] text-black center flex-col text-center">
                        <p className='text-6xl uppercase'>Projects</p>
                        <h2 className='text-xl w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, maiores!</h2>
                    </div>
                    <div className='center w-full  overflow-hidden h-screen'>
                        <div
                            style={{
                                height: "500vh",
                                width: "500vh",
                                clipPath: "shape(nonzero from 76.21% 86.09%, line to 63.38% 90.25%, curve to 55.46% 91.69% with 61.69% 90.25% / 55.46% 90.25%, curve to 50.33% 98.64% with 55.46% 96.93% / 50.35% 93.41%, curve to 49.71% 100% with 50.33% 99.16% / 50.59% 99.95%, curve to 48.85% 98.73% with 48.88% 100.04% / 48.93% 99.25%, curve to 39.08% 86.89% with 48.05% 93.75% / 41.48% 91.45%, curve to 27.13% 81.58% with 37.13% 83.16% / 30.14% 84.73%, curve to 21.78% 63.3% with 23.02% 77.25% / 27.36% 66.11%, curve to 1.19% 57.08% with 15.35% 60.09% / 8.47% 58.09%, curve to 0% 56.43% with 0.68% 57.01% / -0.05% 57.1%, curve to 1.3% 55.9% with 0.06% 55.79% / 0.78% 55.9%, curve to 23.74% 55.21% with 11.92% 55.89% / 13.11% 55.2%, curve to 24.74% 54.66% with 24.63% 55.21% / 23.85% 54.66%, curve to 15.78% 49.96% with 24.98% 54.66% / 15.68% 50.23%, curve to 25.81% 50.76% with 15.85% 49.76% / 25.95% 50.91%, curve to 21.89% 44.68% with 21.8% 46.47% / 27.33% 47.46%, curve to 6.98% 39.44% with 17.24% 42.3% / 12.21% 40.54%, curve to 1.02% 38.43% with 5.02% 39% / 3.03% 38.67%, curve to 0.09% 37.8% with 0.57% 38.38% / 0.09% 38.32%, curve to 1.07% 37.27% with 0.09% 37.22% / 0.62% 37.29%, curve to 2.02% 37.27% with 1.38% 37.26% / 1.7% 37.27%, line to 23.74% 35.44%, curve to 21.89% 34.03% with 24.03% 35.44% / 21.61% 34.04%, curve to 24.26% 34.03% with 22.13% 34.02% / 24.14% 34.29%, curve to 23.55% 32.08% with 24.38% 33.78% / 23.7% 32.24%, curve to 25.02% 28.22% with 21.77% 30.25% / 27.08% 29.82%, curve to 18.35% 24.36% with 21.37% 25.43% / 22.71% 26.21%, curve to 1.28% 19.8% with 12.94% 22.06% / 7.27% 20.48%, curve to 0.82% 19.72% with 1.12% 19.79% / 0.97% 19.76%, curve to 0.09% 19.08% with 0.44% 19.63% / 0.06% 19.51%, curve to 0.9% 18.52% with 0.12% 18.65% / 0.5% 18.55%, curve to 1.94% 18.5% with 1.25% 18.5% / 1.59% 18.5%, line to 32.67% 11.31%, curve to 45.26% 11.31% with 34.3% 11.31% / 45.26% 12.73%, line to 49.03% 2.05%, curve to 49.03% 1.3% with 49.03% 1.8% / 49.01% 1.55%, curve to 49.63% 0% with 49.08% 0.81% / 48.81% 0.06%, curve to 50.37% 1.19% with 50.51% -0.06% / 50.26% 0.71%, curve to 51.92% 7.44% with 50.84% 3.29% / 51.25% 5.38%, curve to 61.67% 17.09% with 53.27% 11.63% / 59.18% 13.32%, curve to 72.83% 21.25% with 63.5% 19.85% / 70.39% 18.88%, curve to 81.07% 29.92% with 76.68% 24.99% / 76.07% 27.4%, curve to 92.17% 41.81% with 85.71% 32.25% / 86.98% 40.69%, curve to 98.4% 42.89% with 94.24% 42.25% / 96.32% 42.56%, curve to 99.27% 43.47% with 98.81% 42.96% / 99.29% 42.98%, curve to 98.32% 44.07% with 99.27% 44% / 98.77% 44.04%, curve to 97.37% 44.08% with 98.01% 44.09% / 97.69% 44.08%, line to 87.21% 46.1%, curve to 90.27% 48.09% with 86.92% 46.1% / 90.56% 48.09%, curve to 90.07% 50.4% with 90.06% 48.1% / 90.19% 50.18%, curve to 89.16% 54.95% with 89.96% 50.62% / 89.03% 54.81%, curve to 85.65% 56.11% with 91.05% 57% / 83.35% 54.41%, curve to 84.83% 58.44% with 90.25% 59.51% / 79.24% 56.5%, curve to 98.09% 61.51% with 89.09% 59.93% / 93.55% 60.96%, line to 98.37% 61.54%, curve to 99.26% 62.2% with 98.82% 61.6% / 99.32% 61.67%, curve to 98.24% 62.71% with 99.2% 62.74% / 98.67% 62.69%, curve to 97.29% 62.71% with 97.92% 62.72% / 97.6% 62.71%, curve to 96.75% 69.18% with 86.25% 62.71% / 107.79% 69.18%, curve to 90.87% 69.62% with 96.31% 69.18% / 91.08% 69.16%, curve to 85.65% 72.62% with 90.69% 70% / 108.67% 81.17%, curve to 83.7% 74.96% with 88.52% 75.58% / 80.08% 72.73%, curve to 84.63% 77.08% with 87.23% 77.12% / 80.65% 75.66%, curve to 96.75% 80.08% with 88.55% 78.49% / 92.63% 79.32%, curve to 98.62% 80.31% with 97.36% 80.19% / 98% 80.22%, curve to 99.25% 80.9% with 98.99% 80.36% / 99.31% 80.51%, curve to 98.52% 81.45% with 99.2% 81.26% / 98.9% 81.42%, curve to 97.48% 81.48% with 98.18% 81.48% / 97.83% 81.49%, line to 76.21% 86.09%, close)"
                            }}
                            className="cont center rotate-90 origin-center ">
                            <div className=" cont_child w-[100vw] h-screen shrink-0 -rotate-90 grid grid-cols-4 gap-5 px-5 overflow-hidden">
                                <div className=" frame_slide_1  w-full h-screen space-y-10">
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                </div>
                                <div className=" frame_slide_2  w-full h-screen space-y-10 translate-y-[-10vh]">
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                </div>
                                <div className=" frame_slide_3  w-full h-screen space-y-10 translate-y-[-5vh]">
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                </div>
                                <div className=" frame_slide_4  w-full h-screen space-y-10 translate-y-[-15vh]">
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="h-[60vh] w-full">
                                            <img className='w-full h-full object-cover' src="https://cdn.telescope.fyi/landing/about/11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize leading-none mt-2 text-2xl'>Project Name</h2>
                                        <h2 className='text-base capitalize opacity-80 leading-none'>Lorem ipsum dolor sit amet.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FrameA;
