import { projectsData } from '@/data/ProjectsData';
import gsap from 'gsap';
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import MobileHero from './MobileHero';
import MobileAbout from './MobileAbout';
import MobileProjects from './MobileProjects';

const MobileHome = () => {




    return (
        <>

            {/* <div className="w-full h-screen center">demo</div> */}

            <MobileHero />

            <MobileAbout />

            <MobileProjects />








        </>
    )
}

export default MobileHome