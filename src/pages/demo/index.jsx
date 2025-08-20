import ProjectCard from '@/components/Effect/ProjectCardImage'
import React from 'react'

const index = () => {
  return (
    <div className='w-full h-screen center  '>
      <div className="w-full h-screen absolute top-0 left-0">
        <ProjectCard imgUrl="/logos/Logo_Dark.webp"/>
      </div>
    </div>
  )
}

export default index