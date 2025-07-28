import BlogsCard from '@/components/cards/BlogsCard'
import PurchaseCard from '@/components/cards/PurchaseCard'
import ReviewsCard from '@/components/cards/ReviewsCard'
import FilterDropdown from '@/components/dropdown/FilterDropdown'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import React, { useRef } from 'react'

const index = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -400, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };


  return (
    <div>
      <div className="w-full bg-[#f4f7f8] py-5 md:py-10 px-4 lg:px-10 ">
        <div className="md:pb-10 flex flex-col gap-2  md:flex-row md:items-center justify-between">
          <div className="">

            <p className='font-bold text-xl mblack capitalize'>Category type</p>
            <div className="w-full text-xs font-bold h-14 gap-1 hidden  md:flex items-center">
              <p className='text-[#197889]'>
                <a href="/">
                  Home
                </a>
              </p>
              <p>{'>'}</p>
              <p className='text-[#197889]'>Category</p>
              <p>{'>'}</p>
              <p className='font-medium'>Category Type</p>
            </div>
          </div>

          <div className=" md:text-end">
            <div className="inline-block rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-800">
              <div className="flex text-sm items-center space-x-3">
                <div className=" text-[#1C9550] font-semibold">
                  ★
                  4.9
                </div>
                <div className="h-5 border-l border-gray-300"></div>
                <div className="text-gray-700 font-medium">501 reviews</div>
              </div>
            </div>
            <div className="hidden md:block text-xs h-5 mt-4">
              Item 30 of 869 Total &nbsp;|&nbsp; Ranging From ₹345 to ₹8475
            </div>
          </div>
        </div>

        <div className="purchase_section">
          <div className="w-full rounded-2xl py-5 bg-white md:px-10">
            <div className="w-full  pb-5 flex flex-row-reverse md:flex-row items-center justify-between scrollbar-hide overflow-x-scroll ">
              <div className="h-full pr-24 ml-2 md:ml-0 flex gap-2 items-center md:justify-center    md:gap-2 capitalize">
                <button className=' shrink-0 px-2 text-xs md:text-sm md:px-4 center gap-2 hover:border-opacity-100 border-[#0E4D65] border-opacity-50 border hover:bg-[#E7EDEF]  rounded-lg  py-2 md:py-3   font-semibold'>
                <img className='mt-1' src="https://imgcdn.floweraura.com/home-page/fa-surge-icon.svg" alt="" />30 min delivery</button>
                <button className=' shrink-0 px-2 text-xs md:text-sm md:px-4 hover:border-opacity-100 border-[#0E4D65] border-opacity-50 border hover:bg-[#E7EDEF] rounded-lg  py-2 md:py-3   font-semibold'>Birthday</button>
                <button className=' shrink-0 px-2 text-xs md:text-sm md:px-4 hover:border-opacity-100 border-[#0E4D65] border-opacity-50 border hover:bg-[#E7EDEF] rounded-lg  py-2 md:py-3   font-semibold'>Anniversary</button>
                <button className=' shrink-0 px-2 text-xs md:text-sm md:px-4 hover:border-opacity-100 border-[#0E4D65] border-opacity-50 border hover:bg-[#E7EDEF] rounded-lg  py-2 md:py-3   font-semibold'>Kids</button>
                <button className=' shrink-0 px-2 text-xs md:text-sm md:px-4 hover:border-opacity-100 border-[#0E4D65] border-opacity-50 border hover:bg-[#E7EDEF] rounded-lg  py-2 md:py-3   font-semibold'>photo cakes</button>
                <button className=' shrink-0 px-2 text-xs md:text-sm md:px-4 hover:border-opacity-100 border-[#0E4D65] border-opacity-50 border hover:bg-[#E7EDEF] rounded-lg  py-2 md:py-3   font-semibold'>animal</button>
                <button className=' shrink-0 px-2 text-xs md:text-sm md:px-4 hover:border-opacity-100 border-[#0E4D65] border-opacity-50 border hover:bg-[#E7EDEF] rounded-lg  py-2 md:py-3   font-semibold'>mango</button>
              </div>
              <div className="h-full center">
                <FilterDropdown />
              </div>
            </div>
            <div className="w-full pb-16  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-7  ">
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <PurchaseCard />
                ))
              }

            </div>
          </div>
        </div>
        <div className="review_section py-10 relative">
          <div className="w-full  rounded-2xl overflow-hidden  py-10 bg-[#F4F7F8] ">
            <div className="px-5  md:px-10">
              <p className=' text-xl md:text-2xl font-semibold mblack mb-3'>Review & Ratings for Cakes Delivery</p>
              <div className="w-full flex gap-5 ">
                <div className="flex gap-2 items-center text-sm md:text-lg font-semibold mblack">
                  <img src="/icons/2stars.avif" alt="" />

                  <p>
                    4.9 out of 5
                  </p>
                </div>
                <div className="flex gap-2 items-center text-sm md:text-lg font-semibold mblack">
                  <img src="/icons/thumb.avif" alt="" />

                  <p>97 % Recommended</p>
                </div>
              </div>
              <div
                ref={scrollRef}
                className="w-full  flex  overflow-x-scroll  scroll-smooth scrollbar-hide gap-5 md:gap-8 pt-10 ">
                {
                  [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <ReviewsCard />
                  ))
                }
              </div>
              <button
                onClick={() => scroll('left')}
                className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full  md:block hidden"
              >
                <RiArrowLeftLine />
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full  md:block hidden"
              >
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
        <div className="blog_section py-10">
          <div className="">
            <p className='text-2xl md:text-3xl font-semibold mblack'>Cakes Related Blogs</p>
            <div className="w-full flex md:grid md:grid-cols-3 overflow-x-scroll scrollbar-hide  mt-5 gap-6">
              {
                [1, 2, 3].map((item) => (
                  <BlogsCard />
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default index