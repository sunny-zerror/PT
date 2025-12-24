<<<<<<< HEAD
import AboutWork from '@/components/home/AboutWork'
import Gallery from '@/components/home/Gallery'
import Hero from '@/components/home/Hero'
import ProjectsScroll from '@/components/home/ProjectsScroll'
import React from 'react'
=======
import { useEffect, useState } from "react";
import MobileHome from "@/components/Home/mobile/MobileHome";
import DesktopHome from "@/components/Home/desktop/DesktopHome";
>>>>>>> 5bfab591eddde55e817e22b0d9723a204d45a199

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutWork/>
      <ProjectsScroll/>
      <Gallery/>
    </>
  )
}

export default Home