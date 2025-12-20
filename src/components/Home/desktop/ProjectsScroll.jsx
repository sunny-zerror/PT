import { projectsData } from "@/data/ProjectsData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const directions = [
    { x: 1.3, y: 0.7 },
    { x: -1.5, y: 1 },
    { x: 1.1, y: -1.3 },
    { x: -1.7, y: -0.8 },
    { x: 0.8, y: 1.5 },
    { x: -1, y: -1.4 },
    { x: 1.6, y: 0.3 },
    { x: -0.7, y: 1.7 },
];


const ProjectsScroll = () => {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray(".scroll-card");

            const vw = window.innerWidth;
            const vh = window.innerHeight;

            // Initial state
            gsap.set(cards, {
                x: 0,
                y: 0,
                z: -1000,
                scale: 0.01,
                rotationX: 0,
                rotationY: 0,
                force3D: true,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=4000",
                    scrub: 0.6,
                    pin: true,
                    invalidateOnRefresh: true,
                },
            });

            cards.forEach((card, i) => {
                const dir = directions[i % directions.length];

                const delay = i * 0.05;

                tl.to(
                    card,
                    {
                        x: dir.x * vw * 0.6,
                        y: dir.y * vh * 0.6,
                        z: 2000,
                        scale: 1.8,
                        rotationY: gsap.utils.random(-10, 10),
                        rotationX: gsap.utils.random(-6, 6),
                        ease: "none",
                    },
                    delay
                );
                tl.to(".rot_circ_paren",{
                    rotate: 720,
                },"<")
            });
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="desktp_wrk_pren w-full h-screen center"
        >
            <div className="rot_circ_paren origin-center translate-x-[-30%] translate-y-[10%] absolute z-[-1] w-[25vw]  aspect-square">
                <img className="w-full " src="/images/projects_circ_bg.png" alt="" />
            </div>
            <div className="rot_circ_paren origin-center translate-y-[-30%]  absolute z-[-1] w-[25vw]  aspect-square">
                <img className="w-full rotate-90 " src="/images/projects_circ_bg.png" alt="" />
            </div>
            <div className="rot_circ_paren origin-center translate-x-[30%] translate-y-[10%] absolute z-[-1] w-[25vw]  aspect-square">
                <img className="w-full rotate-90 " src="/images/projects_circ_bg.png" alt="" />
            </div>
            <div className="cards-stage h-screen w-full flex items-center justify-center">
                {projectsData.map((item, i) => (
                    <div
                        key={i}
                        className="scroll-card absolute w-[35vw] aspect-square"
                    >
                        <img
                            src={item.image}
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsScroll;
