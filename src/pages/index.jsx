import DesktopHome from '@/components/Home/DesktopHome'
import MobileHome from '@/components/Home/MobileHome'
import React from 'react'

const Home = () => {
  return (
    <>
        <div className="hidden lg:block">
            <DesktopHome/>
        </div>

        <div className="lg:hidden">
            <MobileHome/>
        </div>
    </>
  )
}

export default Home