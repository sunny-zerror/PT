import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RiCloseLine } from '@remixicon/react';
import { CustomEase } from 'gsap/dist/CustomEase';
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger, CustomEase, MotionPathPlugin);

const FrameA = () => {
    const main_Ref = useRef(null);
    const logoRef = useRef(null);
    const logoRef2 = useRef(null);
    const clipRef = useRef(null);
    const canvasRef = useRef(null);
    const frameRef = useRef(0);
    const imageCache = useRef({});
    const totalFrames = 83;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Preload images
        let loaded = 0;
        for (let i = 1; i < totalFrames; i++) {
            const padded = String(i).padStart(4, '0');
            const src = `/frames/${padded}.jpg`;
            const img = new Image();
            img.src = src;
            img.onload = () => {
                imageCache.current[i] = img;
                loaded++;
                if (loaded === totalFrames - 1) drawFrame(0); // Start at frame 0
            };
        }

        const drawFrame = (index) => {
            const img = imageCache.current[index];
            if (!img) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };


        // gsap.set(".logo_div", {
        //     y: 40,
        //     scale: 0.3
        // })
        // gsap.set("body", {
        //     overflow: "hidden"
        // })
        // gsap.to(".loader_left", {
        //     left: "3%",
        //     duration: 3.2,
        //     ease: "expo.inOut",
        //     delay: .8
        // })
        // gsap.to(".loader_right", {
        //     right: "3%",
        //     duration: 3.2,
        //     ease: "expo.inOut",
        //     delay: .8
        // })

        // gsap.set(".clip_container", {
        //     scale: .3,
        //     top: "100%",
        //     transformOrigin: "50% 66%"
        // })
        // gsap.to(".logo_div", {
        //     y: 0,
        //     scale: 1,
        //     duration: 1.3,
        //     ease: "expo.inOut",
        //     delay: 4.4
        // })
        // gsap.to(".clip_container", {
        //     top: "5%",
        //     duration: 2.2,
        //     ease: "expo.inOut",
        //     delay: 2.2
        // })
        // gsap.to(".clip_container", {
        //     top: 0,
        //     scale: 1,
        //     duration: 1.5,
        //     ease: "expo.inOut",
        //     delay: 4.2
        // })
        // gsap.to(".loader_left, .loader_right, .percent_inc", {
        //     opacity: 0,
        //     duration: 1,
        //     ease: "expo.inOut",
        //     delay: 4
        // })
        // gsap.fromTo(".short_desc p, .short_desc h2", {
        //     y: 100
        // }, {
        //     y: 0,
        //     duration: 2,
        //     ease: "expo.inOut",
        //     delay: 4.7
        // })
        // gsap.to(".loader_left, .loader_right, .percent_inc", {
        //     display: "none",
        //     duration: 0,
        //     ease: "expo.inOut",
        //     delay: 5.5
        // })

        // gsap.to("body", {
        //     overflowY: "scroll",
        //     delay: 7
        // })

        ////////////////////////////////////
        const timeout = setTimeout(() => {
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

            gsap.set(".logo_image", {
                opacity: 0,
                y: 100
            })


            tl.to([logoRef.current, logoRef2.current], {
                top: 20,
                duration: 1,
            }, "pin");

            tl.to(clipRef.current, {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
                ease: "ease.out",
                duration: 1,
            }, "pin");

            tl.to(".profile_pic", {
                bottom: "0%",
                duration: 1,
            });

            tl.to(".slide_box", {
                left: "50%",
                duration: 1,
            });

            tl.to(".slide_box", {
                left: "12.5%",
                duration: 1.5,
            }, "pin2");

            tl.to(".profile_pic", {
                height: "100vh",
                width: "100%",
                duration: 1.5,
            }, "pin2");
            tl.to(".profile_pic img", {
                filter: "brightness(.5)",
                duration: 1.5,
            }, "pin2");

            tl.to([logoRef.current, logoRef2.current, ".log_par"], {
                top: "-65vh",
                duration: 1.5,
            }, "pin2");

            tl.to(".logo_image", {
                y: 0,
                opacity: 1,
                duration: 1,
            }, "pin3");

            tl.to(".slide_box", {
                left: "-13%",
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
                top: "-65vw",
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
                top: "-70vw",
                duration: 3,
            }, "pin5.5");

            tl.to(".frame_slider", {
                top: "10vw",
                duration: 2.12,
                delay: .867,
            }, "pin5.5");

            const path = [
                { x: 700, y: 20 },
                { x: 0, y: 0 },
            ];
            tl.to(".move_proj", {
                motionPath: {
                    path: path,
                    align: false,
                    autoRotate: false,
                },
                width: "100%",
                duration: 2,
            }, "pin6")

            tl.to(".move_proj_inner", {
                height: "25vw",
                duration: 2,
            }, "pin6");

            tl.to(".spn_img_slider", {
                top: "-90vw",
                duration: 3,
            }, "pin6");

            tl.to(".frameB", {
                filter: "brightness(.3)",
                duration: 2,
            }, "pin6")

            tl.to(".frame_slider", {
                top: "-110vh",
                duration: 2,
            }, "pin6")

            tl.to(".frame_slide_1", {
                transform: "translateY(-90vh)",
                delay:1.85,
                duration: 4,
                onComplete: () => {
                    gsap.set(".cont", {
                        overflow: "hidden",
                        clipPath: "shape(nonzero from 100% 100%, line to 66.33% 100%, curve to 58.13% 100% with 64.62% 100% / 59.89% 100%, curve to 53.48% 100% with 55.65% 100% / 56.67% 100%, curve to 50.26% 100% with 52.38% 100% / 51.18% 100%, curve to 45.76% 100% with 49.4% 100% / 46.31% 100%, curve to 30.63% 100% with 41.76% 100% / 30.63% 100%, curve to 0% 100% with 29.17% 100% / 2.64% 100%, curve to 0% 66.42% with 0% 97.9% / 0% 71.11%, curve to 0% 56.98% with 0% 62.34% / 0% 62.05%, curve to 0% 54.51% with 0% 56.38% / 0% 55.15%, curve to 0% 53.75% with 0% 53.9% / 0% 54.17%, curve to 0% 51.45% with 0% 51.27% / 0% 52.34%, curve to 0% 48.24% with 0% 50.85% / 0% 48.93%, curve to 0% 46.05% with 0% 48.04% / 0% 46.32%, curve to 0% 44.33% with 0% 45.85% / 0% 44.51%, curve to 0% 41.25% with 0% 43.19% / 0% 42.79%, curve to 0% 38.51% with 0% 40.58% / 0% 39.2%, curve to 0% 37.55% with 0% 38.11% / 0% 37.82%, curve to 0% 36.36% with 0% 37.37% / -0% 36.85%, curve to 0% 35.81% with 0% 36.28% / 0% 35.97%, curve to 0% 35.74% with 0% 35.79% / 0% 35.77%, line to 0% 30.77%, curve to 0% 29.96% with 0% 30.64% / 0% 30.14%, curve to 0% 29.16% with 0% 29.88% / 0% 29.45%, curve to 0% 27.47% with 0% 28.92% / 0% 27.67%, curve to 0% 25.21% with 0% 26.62% / 0% 26.48%, curve to 0% 22.49% with 0% 24.36% / 0% 23.96%, curve to 0% 19.88% with 0% 21.33% / 0% 20.71%, curve to 0% 19.7% with -0% 19.83% / 0% 19.79%, curve to 0% 19.12% with 0% 19.54% / 0% 19.52%, curve to 0% 18.59% with 0% 18.72% / 0% 18.79%, curve to 0% 17.83% with 0% 18.52% / 0% 18.07%, line to 0% 0%, curve to 25.17% 0% with 1.67% 0% / 22.71% 0%, line to 48.98% 0%, curve to 49.79% 0% with 49.08% 0% / 49.55% 0%, curve to 51.12% 0% with 50.03% 0% / 50.59% 0%, curve to 51.86% 0% with 52.02% 0% / 51.54% -0%, curve to 55.18% 0% with 53.19% 0% / 54.11% 0%, curve to 68.34% 0% with 59.26% 0% / 64.41% 0%, curve to 100% 0% with 72.76% 0% / 96.81% 0%, curve to 100% 29.96% with 100% 4.11% / 100% 25.21%, curve to 100% 39.51% with 100% 32.69% / 100% 37.15%, curve to 100% 41.63% with 100% 40.52% / 100% 40.92%, curve to 100% 42.24% with 100% 41.79% / 100% 41.88%, curve to 100% 43.04% with 100% 42.73% / 100% 42.82%, curve to 100% 44.07% with 100% 43.35% / 100% 43.89%, line to 100% 47.79%, curve to 100% 49.06% with 100% 47.93% / 100% 48.95%, curve to 100% 50.69% with 100% 49.14% / 100% 50.49%, curve to 100% 51.56% with 100% 50.91% / 100% 51.41%, curve to 100% 53.82% with 100% 52.45% / 100% 52.59%, curve to 100% 56.43% with 100% 54.93% / 100% 55.04%, curve to 100% 59.01% with 100% 57.27% / 100% 58.39%, line to 100% 59.26%, curve to 100% 59.97% with 100% 59.39% / 100% 59.46%, curve to 100% 60.75% with 100% 60.49% / 100% 60.67%, curve to 100% 61% with 100% 60.87% / 100% 60.96%, curve to 100% 66.47% with 100% 61.42% / 100% 65.04%, curve to 100% 68.32% with 100% 66.67% / 100% 67.87%, curve to 100% 69.57% with 100% 68.7% / 100% 69.28%, curve to 100% 73.25% with 100% 71.33% / 100% 71.89%, curve to 100% 75.01% with 100% 74.23% / 100% 74.45%, curve to 100% 76.53% with 100% 75.75% / 100% 76.08%, curve to 100% 77.22% with 100% 76.77% / 100% 77%, curve to 100% 77.69% with 100% 77.33% / 100% 77.31%, curve to 100% 78.36% with 100% 78.02% / 100% 78.22%, curve to 100% 79.27% with 100% 78.58% / 100% 79.14%, line to 100% 100%, close)"
                    })
                    gsap.set(".frame_slider", {
                        backgroundColor: "#FFFBF3"
                    })
                },
                onReverseComplete: () => {
                    gsap.set(".cont", {
                        overflow: "visible",
                        clipPath: "none"
                    })
                    gsap.set(".frame_slider", {
                        backgroundColor: "transparent"
                    })
                }
            }, "pin6")
            tl.to(".frame_slide_2", {
                delay:1.85,
                transform: "translateY(-60vw)",
                duration: 4
            }, "pin6")
            tl.to(".frame_slide_3", {
                delay:1.85,
                transform: "translateY(-110vh)",
                duration: 4
            }, "pin6")
            tl.to(".frame_slide_4", {
                delay:1.85,
                transform: "translateY(-90vh)",
                duration: 4
            }, "pin6")

            tl.to(".cont", {
                width: "20vh",
                height: "20vh",
                y: "-10vh",
                clipPath: "shape(nonzero from 75.26% 81.49%, line to 52.41% 81.49%, curve to 50.71% 82.93% with 50.71% 81.49% / 50.71% 81.49%, curve to 50.7% 98.64% with 50.71% 88.17% / 50.71% 93.41%, curve to 50.07% 100% with 50.7% 99.16% / 50.96% 99.95%, curve to 49.2% 98.73% with 49.24% 100.04% / 49.29% 99.25%, curve to 44.22% 84.47% with 48.4% 93.75% / 46.64% 89.03%, curve to 36.7% 74.09% with 42.26% 80.73% / 39.73% 77.24%, curve to 21.94% 63.3% with 32.56% 69.76% / 27.56% 66.11%, curve to 1.2% 57.08% with 15.46% 60.09% / 8.53% 58.09%, curve to 0% 56.43% with 0.68% 57.01% / -0.05% 57.1%, curve to 1.31% 55.9% with 0.06% 55.79% / 0.79% 55.9%, curve to 33.42% 55.9% with 12.01% 55.89% / 22.72% 55.89%, curve to 36.1% 55.9% with 34.32% 55.9% / 35.21% 55.9%, curve to 36.76% 55.69% with 36.34% 55.9% / 36.66% 55.96%, curve to 36.45% 55.21% with 36.83% 55.48% / 36.58% 55.35%, curve to 22.05% 44.68% with 32.4% 50.92% / 27.53% 47.46%, curve to 7.03% 39.44% with 17.36% 42.3% / 12.3% 40.54%, curve to 1.03% 38.43% with 5.05% 39% / 3.05% 38.67%, curve to 0.09% 37.8% with 0.57% 38.38% / 0.09% 38.32%, curve to 1.07% 37.27% with 0.09% 37.22% / 0.63% 37.29%, curve to 2.03% 37.27% with 1.39% 37.26% / 1.71% 37.27%, line to 35.2% 37.27%, curve to 36.05% 37.27% with 35.48% 37.27% / 35.77% 37.28%, curve to 36.74% 37.09% with 36.3% 37.26% / 36.62% 37.34%, curve to 36.43% 36.52% with 36.86% 36.84% / 36.59% 36.68%, curve to 30.63% 31.36% with 34.64% 34.69% / 32.7% 32.96%, curve to 18.49% 24.36% with 26.96% 28.57% / 22.87% 26.21%, curve to 1.29% 19.8% with 13.03% 22.06% / 7.32% 20.48%, curve to 0.82% 19.72% with 1.13% 19.79% / 0.98% 19.76%, curve to 0.09% 19.08% with 0.44% 19.63% / 0.06% 19.51%, curve to 0.9% 18.52% with 0.12% 18.65% / 0.5% 18.55%, curve to 1.95% 18.5% with 1.26% 18.5% / 1.6% 18.5%, line to 47.75% 18.5%, curve to 49.39% 17.09% with 49.39% 18.5% / 49.39% 18.5%, line to 49.39% 2.05%, curve to 49.39% 1.3% with 49.39% 1.8% / 49.36% 1.55%, curve to 49.99% 0% with 49.44% 0.81% / 49.17% 0.06%, curve to 50.73% 1.19% with 50.88% -0.06% / 50.62% 0.71%, curve to 52.3% 7.44% with 51.21% 3.29% / 51.62% 5.38%, curve to 58.13% 19.42% with 53.66% 11.63% / 55.62% 15.66%, curve to 64.58% 27.13% with 59.97% 22.18% / 62.13% 24.76%, curve to 77.92% 36.6% with 68.47% 30.88% / 72.88% 34.08%, curve to 92.85% 41.81% with 82.59% 38.94% / 87.61% 40.69%, curve to 99.12% 42.89% with 94.93% 42.25% / 97.02% 42.56%, curve to 100% 43.47% with 99.54% 42.96% / 100.01% 42.98%, curve to 99.04% 44.07% with 99.99% 44% / 99.5% 44.04%, curve to 98.08% 44.08% with 98.72% 44.09% / 98.4% 44.08%, line to 64.82% 44.08%, curve to 63.96% 44.08% with 64.53% 44.08% / 64.24% 44.08%, curve to 63.36% 44.25% with 63.74% 44.09% / 63.48% 44.04%, curve to 63.62% 44.75% with 63.25% 44.47% / 63.48% 44.6%, curve to 69.96% 50.37% with 65.52% 46.79% / 67.65% 48.67%, curve to 85.45% 58.44% with 74.59% 53.77% / 79.82% 56.5%, curve to 98.81% 61.51% with 89.75% 59.93% / 94.23% 60.96%, line to 99.09% 61.54%, curve to 99.98% 62.2% with 99.55% 61.6% / 100.04% 61.67%, curve to 98.95% 62.71% with 99.92% 62.74% / 99.39% 62.69%, curve to 98% 62.71% with 98.63% 62.72% / 98.31% 62.71%, curve to 64.64% 62.72% with 86.88% 62.71% / 75.76% 62.71%, curve to 63.34% 62.95% with 64.19% 62.72% / 63.56% 62.49%, curve to 64.01% 63.88% with 63.16% 63.33% / 63.73% 63.59%, curve to 73.86% 71.71% with 66.9% 66.84% / 70.21% 69.47%, curve to 85.25% 77.08% with 77.41% 73.86% / 81.24% 75.66%, curve to 97.46% 80.08% with 89.19% 78.49% / 93.31% 79.32%, curve to 99.34% 80.31% with 98.08% 80.19% / 98.72% 80.22%, curve to 99.98% 80.9% with 99.71% 80.36% / 100.03% 80.51%, curve to 99.24% 81.45% with 99.92% 81.26% / 99.62% 81.42%, curve to 98.19% 81.48% with 98.89% 81.48% / 98.54% 81.49%, line to 75.26% 81.49%, close)",
                duration: 2,
                backgroundColor: "#18293A"
            }, "pin8")
            tl.to(".cont_child", {
                opacity: 0,
                duration: 1,
                delay: 1
            }, "pin8")
            tl.to(".cont", {
                opacity: 0,
                duration: 1,
            }, "pin10")
            tl.to(".last_vec", {
                opacity: 1,
                pointerEvents: "auto",
                duration: 1,
            }, "pin10")
            tl.to(frameRef, {
                current: totalFrames - 1,
                snap: 'current',
                duration:4,
                onUpdate: () => {
                    drawFrame(Math.round(frameRef.current));
                }
            }, "pin11")
        }, 100);

        return () => clearTimeout(timeout);


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

    useEffect(() => {
        gsap.to(".rotate", {
            rotation: 360,
            ease: "none",
            duration: 10,
            repeat: -1,
            transformOrigin: "center center",
        })

    }, [])

    return (
        <div>
            <div className="logo_paren fixed block  w-56 z-[999] p-5">
                <div className="logo block overflow-hidden">
                    <img className=' logo_image opacity-0 ' src="/logos/Logo_Dark.svg" alt="" />
                </div>
            </div>
            <div ref={main_Ref} className="h-screen w-full relative">
                <div
                    ref={clipRef}
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                    className=" bg-[#FFFBF3] absolute top-0 w-full h-[65vh] z-[10] flex items-end justify-center "
                >
                    <div
                        ref={logoRef}
                        className=" absolute w-full ">
                        <div className=" logo_div  center   w-full">
                            <img className="w-[94.8%]" src="/logos/Logo_Dark.svg" alt="" />
                        </div>

                        <div className=" short_desc w-full px-10 py-4  overflow-hidden text-[16px] flex items-center justify-between">
                            <p>3D ideas, big projects</p>
                            <h2>Creative Director</h2>
                            <p>Freelance 3D Graphic Designer</p>
                            <h2 className="vvds_light">Mumbai, India.</h2>
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

                    <div className=" pointer-events-none percent_inc absolute translate-y-[7vh] left-[50%] translate-x-[-50%]  ">
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

                <div className="log_par absolute w-full h-[65vh] ">
                    <div
                        ref={logoRef2}
                        className=" absolute bottom-0 w-full z-[9]">
                        <div className=" logo_div  center   w-full">
                            <img className="w-[94.8%]" src="/logos/Logo_Light.svg" alt="" />
                        </div>
                        <div className=" short_desc w-full px-10 py-4 text-[#fffbf3]  overflow-hidden text-[16px] flex items-center justify-between">
                            <p>3D ideas, big projects</p>
                            <h2>Creative Director</h2>
                            <p>Freelance 3D Graphic Designer</p>
                            <h2 className='vvds_light' >Mumbai, India.</h2>
                        </div>
                    </div>
                </div>
                <div
                    className=" profile_pic absolute z-[8] bottom-[-100%] absolute_x_center w-[35%]  h-[80vh]">
                    <img className='object-cover brightness-[.9] w-full h-full' src="/images/Piran_pic.webp" alt="" />
                </div>

                <div className=" slide_box z-[10] -translate-x-1/2 aspect-square w-[25vw] p-10 text-[1.2vw] absolute h-[30vw] bg-[#FFFBF3] bottom-0  left-[125%] flex flex-col justify-between items-center  text-center ">
                    <div className=" center flex-col gap-7">
                        <img src="	https://www.archi-malinstudio.com/_vercel/image?url=%2Fimg%2Fpicto%2Fflocon.svg&w=320&q=100" alt="" />
                        <p className=' xl:text-3xl 2xl:text-4xl mix_light'>I’m Piran — a brand strategist driven by curiosity, shaped by Mumbai, and grounded in thoughtful design.</p>
                    </div>
                    <h2 className='text-sm'>Freelance 3D Graphic Designer</h2>
                </div>

                <div className=" slide_box_upside  w-[40vw] z-[10] absolute text-white   bottom-[-150%]  right-5 ">
                    <h2 className='text-xl mb-6'>What I believe and follow</h2>
                    <h2 className='text-xl'>Brand as a Living System</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>A brand isn’t just a logo — it’s a living, evolving ecosystem. The strongest ones grow with their audience and stay rooted in purpose.</p>
                    <h2 className='text-xl'>Story and Structure</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>Story creates meaning. Structure creates momentum. I build brands where emotion and systems work together — with intention, not accident.</p>
                    <h2 className='text-xl'>Ethical Innovation</h2>
                    <p className='text-4xl leading-none mb-10 mix_light'>Innovation without intention is just noise. I design with awareness — of people, context, and long-term impact</p>
                </div>

                <div className=" frameB brightness-100   w-full h-screen z-[12] bg-[#FFFBF3] absolute top-0 left-[100%]">

                    <div className=" absolute top-0 left-0 spn_slide w-[75%]">
                        <h2 className='text-black text-[4.5vw] p-4 leading-none'>
                            <span className='spn_1'>
                                To enhance your , elevating them into a striking 2D representation capable of captivating your clients and bringing your boldest architectural visions to life.
                            </span>
                            <span className='spn_2 opacity-[.1]'>
                                Our expertise lies in crafting highly detailed architectural renderings, where every element is expressed with precision. Our mission is to capture the very essence of
                            </span>
                            <span className='spn_3 opacity-[.1]'>
                                Bring your exterior architectural projects to life — whether they are single-family homes, residential complexes, or imposing skyscrapers — through renderings of exceptional accuracy and
                            </span>
                            <span className='spn_4 opacity-[.1]'>
                                Axonometric views allow you to see the project as a whole at a single glance. This provides a clearer perception of volumes,
                            </span>
                            <span className='spn_5 opacity-[.1]'>
                                proportions, and the relationship between different parts of the project. Such visuals highlight the architectural intentions and design choices of the client.
                            </span> &nbsp;
                        </h2>

                    </div>

                    <div className=" spn_img_slider px-5 w-[23%] text-black absolute right-0 top-0">
                        <div className="w-full">
                            <div className=" aspect-square h-[22vw] w-full">
                                <img className='w-full h-full object-cover' src="/images/project/project1.webp" alt="" />
                            </div>
                            <h2 className='capitalize text-xl vvds_light mt-2'>Florida</h2>
                            <h2 className=' text-sm vvds_light leading-none uppercase'>A24</h2>
                        </div>
                        <div className="w-full mt-10">
                            <div className="h-[22vw] w-full">
                                <img className='w-full h-full object-cover' src="/images/project/project2.webp" alt="" />
                            </div>
                            <h2 className='capitalize text-xl vvds_light mt-2'>Gia Vin & Grill</h2>
                            <h2 className=' text-sm vvds_light leading-none uppercase'>Restaurant</h2>
                        </div>
                        <div className="w-full mt-10">
                            <div className="h-[22vw] w-full">
                                <img className='w-full h-full object-cover' src="/images/project/project3.webp" alt="" />
                            </div>
                            <h2 className='capitalize text-xl vvds_light mt-2'>Black V2 Hoodie</h2>
                            <h2 className=' text-sm vvds_light leading-none uppercase'>Seventh</h2>
                        </div>
                    </div>

                </div>
                <div className="frame_slider absolute top-[100%]  left-0 w-full   z-[14]">
                    <div className="w-full h-[70vh] bg-transparent"></div>
                    <div className="w-full h-[40vh] center flex-col gap-5 text-black bg-[#FFFBF3]">
                        <h2 className='uppercase  text-xl vvds_light'>Projects</h2>
                        <h2 className='capitalize text-6xl vvds_light'>Outdoor Indoor Gear</h2>
                        <h2 className='capitalize  opacity-70 '>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    </div>
                    <div className='center w-full   h-screen'>
                        <div
                            style={{
                                height: "500vh",
                                width: "500vh",
                                // clipPath: "shape(nonzero from 100% 100%, line to 66.33% 100%, curve to 58.13% 100% with 64.62% 100% / 59.89% 100%, curve to 53.48% 100% with 55.65% 100% / 56.67% 100%, curve to 50.26% 100% with 52.38% 100% / 51.18% 100%, curve to 45.76% 100% with 49.4% 100% / 46.31% 100%, curve to 30.63% 100% with 41.76% 100% / 30.63% 100%, curve to 0% 100% with 29.17% 100% / 2.64% 100%, curve to 0% 66.42% with 0% 97.9% / 0% 71.11%, curve to 0% 56.98% with 0% 62.34% / 0% 62.05%, curve to 0% 54.51% with 0% 56.38% / 0% 55.15%, curve to 0% 53.75% with 0% 53.9% / 0% 54.17%, curve to 0% 51.45% with 0% 51.27% / 0% 52.34%, curve to 0% 48.24% with 0% 50.85% / 0% 48.93%, curve to 0% 46.05% with 0% 48.04% / 0% 46.32%, curve to 0% 44.33% with 0% 45.85% / 0% 44.51%, curve to 0% 41.25% with 0% 43.19% / 0% 42.79%, curve to 0% 38.51% with 0% 40.58% / 0% 39.2%, curve to 0% 37.55% with 0% 38.11% / 0% 37.82%, curve to 0% 36.36% with 0% 37.37% / -0% 36.85%, curve to 0% 35.81% with 0% 36.28% / 0% 35.97%, curve to 0% 35.74% with 0% 35.79% / 0% 35.77%, line to 0% 30.77%, curve to 0% 29.96% with 0% 30.64% / 0% 30.14%, curve to 0% 29.16% with 0% 29.88% / 0% 29.45%, curve to 0% 27.47% with 0% 28.92% / 0% 27.67%, curve to 0% 25.21% with 0% 26.62% / 0% 26.48%, curve to 0% 22.49% with 0% 24.36% / 0% 23.96%, curve to 0% 19.88% with 0% 21.33% / 0% 20.71%, curve to 0% 19.7% with -0% 19.83% / 0% 19.79%, curve to 0% 19.12% with 0% 19.54% / 0% 19.52%, curve to 0% 18.59% with 0% 18.72% / 0% 18.79%, curve to 0% 17.83% with 0% 18.52% / 0% 18.07%, line to 0% 0%, curve to 25.17% 0% with 1.67% 0% / 22.71% 0%, line to 48.98% 0%, curve to 49.79% 0% with 49.08% 0% / 49.55% 0%, curve to 51.12% 0% with 50.03% 0% / 50.59% 0%, curve to 51.86% 0% with 52.02% 0% / 51.54% -0%, curve to 55.18% 0% with 53.19% 0% / 54.11% 0%, curve to 68.34% 0% with 59.26% 0% / 64.41% 0%, curve to 100% 0% with 72.76% 0% / 96.81% 0%, curve to 100% 29.96% with 100% 4.11% / 100% 25.21%, curve to 100% 39.51% with 100% 32.69% / 100% 37.15%, curve to 100% 41.63% with 100% 40.52% / 100% 40.92%, curve to 100% 42.24% with 100% 41.79% / 100% 41.88%, curve to 100% 43.04% with 100% 42.73% / 100% 42.82%, curve to 100% 44.07% with 100% 43.35% / 100% 43.89%, line to 100% 47.79%, curve to 100% 49.06% with 100% 47.93% / 100% 48.95%, curve to 100% 50.69% with 100% 49.14% / 100% 50.49%, curve to 100% 51.56% with 100% 50.91% / 100% 51.41%, curve to 100% 53.82% with 100% 52.45% / 100% 52.59%, curve to 100% 56.43% with 100% 54.93% / 100% 55.04%, curve to 100% 59.01% with 100% 57.27% / 100% 58.39%, line to 100% 59.26%, curve to 100% 59.97% with 100% 59.39% / 100% 59.46%, curve to 100% 60.75% with 100% 60.49% / 100% 60.67%, curve to 100% 61% with 100% 60.87% / 100% 60.96%, curve to 100% 66.47% with 100% 61.42% / 100% 65.04%, curve to 100% 68.32% with 100% 66.67% / 100% 67.87%, curve to 100% 69.57% with 100% 68.7% / 100% 69.28%, curve to 100% 73.25% with 100% 71.33% / 100% 71.89%, curve to 100% 75.01% with 100% 74.23% / 100% 74.45%, curve to 100% 76.53% with 100% 75.75% / 100% 76.08%, curve to 100% 77.22% with 100% 76.77% / 100% 77%, curve to 100% 77.69% with 100% 77.33% / 100% 77.31%, curve to 100% 78.36% with 100% 78.02% / 100% 78.22%, curve to 100% 79.27% with 100% 78.58% / 100% 79.14%, line to 100% 100%, close)"
                            }}
                            className="cont center rotate-90 origin-center ">
                            <div className=" cont_child w-[100vw] h-screen bg-[#FFFBF3] shrink-0 -rotate-90 grid grid-cols-4 gap-5 px-5 ">
                                <div className=" frame_slide_1  w-full h-screen space-y-10 bg-[#FFFBF3]">


                                    <div className="move_proj  z-[999] translate-x-[76.6vw] bg-[#fffbf3] translate-y-[-100vh]  w-[88%] ">
                                        <div className=" move_proj_inner  aspect-square h-[22vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project4.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>MothTech T-Shirt</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Satisfy</h2>
                                    </div>


                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project5.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Gel Quantum 360 VIII</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Asics x Lack of Guidance</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project6.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Pas Normal Studios</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>PNS x Salomon Daypack</h2>
                                    </div>
                                </div>
                                <div className=" frame_slide_2 z-[-1]  w-full h-screen space-y-10 ">
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project7.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>White Gum 001</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Norda</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project8.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Ski Mask - Storm Blue</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>JJJJound x Descente</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project9.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Zen Sherpa Jacket</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Captain's Zen Garden</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project2.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Zen Sherpa Jacket</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Captain's Zen Garden</h2>
                                    </div>
                                </div>
                                <div className=" frame_slide_3 z-[-1]  w-full h-screen space-y-10 ">
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project10.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'> Shell Jacket</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>66°North</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project11.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Loose Tapered Ridge Pants</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Gramicci</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project12.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Early Winter Gloves</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Fingerscrossed</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project13.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Ciao Socks</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Fingerscrossed</h2>
                                    </div>
                                </div>
                                <div className=" frame_slide_4 z-[-1]  w-full h-screen space-y-10 ">
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project14.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Ciao Socks</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Fingerscrossed</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project15.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Loose Tapered Ridge Pants</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>Gramicci</h2>
                                    </div>
                                    <div className="w-full ">
                                        <div className="aspect-square h-[25vw] w-full">
                                            <img className='w-full h-full object-cover' src="/images/project/project1.webp" alt="" />
                                        </div>
                                        <h2 className='capitalize text-xl vvds_light mt-2'>Pas Normal Studios</h2>
                                        <h2 className='capitalize text-sm vvds_light leading-none'>PNS x Salomon Daypack</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" last_vec opacity-0 z-[20] pointer-events-none flex absolute items-center w-full justify-center h-screen">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full"
                        style={{ display: 'block', pointerEvents: 'none' }}
                    />
                </div>
            </div>
            <div className="w-full  translate-y-[10vh] h-[20vh] p-10  flex items-center justify-between">
                <div className="w-[30%] h-full">
                    <p>
                        I’m open to collaborations, commissions, or a good conversation. <br />
                        Email me at <b>pirantarapora@gmail.com</b>
                    </p>
                </div>
                <div className="w-[30%] h-full flex justify-center items-center gap-5">
                    <img src="/logos/insta.svg" alt="" />
                    <img src="/logos/linkedin.svg" alt="" />
                </div>
                <div className="w-[30%] flex items-center gap-10 justify-center h-full">
                    <p>Copyright © 2025 . All rights reserved.</p>
                    <div className="center group cursor-pointer">
                        <img className='absolute group-hover:-rotate-45 z-[9] transition-all duration-300' src="/logos/arrow-right.svg" alt="" />
                        <img className='rotate' src="/logos/contact_rotate.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameA;
