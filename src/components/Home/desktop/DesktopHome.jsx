import React from 'react'
import DesktopHero from './DesktopHero'
import AboutWork from './AboutWork'
import ProjectsScroll from './ProjectsScroll'

const DesktopHome = () => {
  return (
    <>
      {/* <DesktopHero/> */}
      <div className="w-full h-screen center">
        <p className='text-4xl'>scroll</p>
      </div>
      <AboutWork/>
      <ProjectsScroll/>
      <div className="w-full h-screen center">
        <p className='text-4xl'>scroll</p>
      </div>
    </>
  )
}

export default DesktopHome