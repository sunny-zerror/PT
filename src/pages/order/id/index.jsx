import { RiArrowDownSLine, RiStarFill } from '@remixicon/react'
import React, { useState } from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
import SimilarProductCard from '@/components/cards/SimilarProductCard'
import EnterCityPopup from '@/components/Popups/EnterCityPopup'
import CustomerImages from '@/components/sections/CustomerImages'
import CustomerShortReview from '@/components/sections/CustomerShortReview'
import PurchaseSwiper from '@/components/Swipers/PurchaseSwiper'

const index = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [SelectedCity, setSelectedCity] = useState("")
  const [OpenCityPopup, setOpenCityPopup] = useState(false)


  const reviews = [
    { name: 'Alice', review: 'Loved it!' },
    { name: 'Bob', review: 'Amazing product!' },
    { name: 'Charlie', review: 'Highly recommend!' },
    { name: 'Daisy', review: 'Beautiful and fast delivery.' },
    { name: 'Ethan', review: 'Very satisfied!' }
  ];

  useEffect(() => {

    gsap.to("#shake_img", {
      duration: 2,
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

  }, [])


  return (
    <div>
      {OpenCityPopup && (
        <EnterCityPopup
          setOpenCityPopup={setOpenCityPopup}
          cityName={(val) => setSelectedCity(val)}
          selectedCity={SelectedCity}
        />
      )}

      <div className="w-full bg-[#f4f7f8] px-4 lg:px-10 ">
        <div className="w-full text-xs font-bold h-14 gap-1 hidden  md:flex items-center">
          <p className='text-[#197889]'>
            <a href="/">
              Home
            </a>
          </p>
          <p>{'>'}</p>
          <p className='text-[#197889]'>Cakes</p>
          <p>{'>'}</p>
          <p className='font-medium'>Choclate Truffle Cake</p>
        </div>
        <div className="w-full rounded-2xl bg-white md:px-10 py-10  flex flex-col md:flex-row">
          <div className="w-full h-[40vh]  mb-5 flex md:hidden items-center justify-center">
            <PurchaseSwiper />
          </div>
          <div className="  w-[45%] h-full sticky top-28 hidden  md:flex ">
            <div className="w-fit ">
              <div className=" md:size-14 lg:size-20  rounded-lg mb-2 p-1">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img className='w-full h-full object-cover' src="https://imgcdn.floweraura.com/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.jpg?tr=w-170,q-60" alt="" />
                </div>
              </div>
              <div className=" md:size-14 lg:size-20  rounded-lg mb-2 p-1">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img className='w-full h-full object-cover' src="https://imgcdn.floweraura.com/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.jpg?tr=w-170,q-60" alt="" />
                </div>
              </div>
              <div className=" md:size-14 lg:size-20  rounded-lg mb-2 p-1">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img className='w-full h-full object-cover' src="https://imgcdn.floweraura.com/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.jpg?tr=w-170,q-60" alt="" />
                </div>
              </div>
              <div className=" md:size-14 lg:size-20  rounded-lg mb-2 p-1">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img className='w-full h-full object-cover' src="https://imgcdn.floweraura.com/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.jpg?tr=w-170,q-60" alt="" />
                </div>
              </div>

            </div>
            <div className="w-full ">
              <div className="w-full h-fit flex flex-col items-center">
                <div className="w-[95%] h-[80%] center rounded-xl overflow-hidden">
                  <img className='w-full h-full object-cover' src="https://imgcdn.floweraura.com/DSC_4074.jpg?tr=w-170,q-60" alt="" />
                </div>
              </div>
              <div className="w-full  mt-3  flex md:flex-wrap items-center justify-evenly">
                <div className=" h-full flex flex-col items-center justify-center">
                  <img className='scale-90' src="https://imgcdn.floweraura.com/ssr-build//static/media/smile.a4bf068c.svg" alt="" />
                  <p className='text-xs font-bold mblack'>20+Mn Smiles</p>
                  <p className='text-xs font-medium'>Delivered</p>
                </div>
                <div className=" h-full flex flex-col items-center justify-center">
                  <img className='scale-90' src="https://imgcdn.floweraura.com/ssr-build//static/media/citypin.942be1ce.svg" alt="" />
                  <p className='text-xs font-bold mblack'>20000+</p>
                  <p className='text-xs font-medium'>Pincodes Covered</p>
                </div>
                <div className=" h-full flex flex-col items-center justify-center">
                  <img src="https://imgcdn.floweraura.com/ssr-build//static/media/courier.716ec638.svg" alt="" />
                  <p className='text-xs font-bold mblack'>620+ Cities Enjoying</p>
                  <p className='text-xs font-medium'>same-day delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right section Right sectionRight sectionRight sectionRight section */}
          <div className=" w-full md:w-[55%]  md:px-5 ">
            <div className="w-full pb-5 border-b  flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-1">
                  <div className="center   w-5 h-5 bg-white">
                    <img className='w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png" alt="" />
                  </div>
                  <p className='text-xs uppercase text-[#22AA00] font-bold'>Eggless</p>
                </div>
                <p className='mt-2 mblack opacity-90 text-lg font-medium'>Chocolate Truffle Cake</p>
                <p className='mt-4 min-[640px]:hidden text-xl font-medium mblack'>₹ 545</p>
                <div className="flex items-center mt-4 cursor-default">
                  <span className="bg-[#4caf50] flex items-center   text-white text-xs py-1   md:text-sm font-semibold mr-2  px-3 gap-2  rounded-md">
                    <RiStarFill size={12} color='white' />
                    5
                  </span>
                  <span className=" text-sm  md:text-sm text-[#197889]">
                    • 3 Reviews
                  </span>
                </div>
              </div>
              <div className=" max-[640px]:hidden h-full">
                <button className="border center p-2 rounded-full ">
                  <img className='w-6' src="https://imgcdn.floweraura.com/ssr-build//static/media/heartWhite.24820693.svg" alt="" />
                </button>
              </div>
            </div>
            <p className='mt-4 max-[640px]:hidden text-xl font-medium mblack'>₹ 545</p>
            <div className=" flex flex-col gap-3 mt-3">
              <div className="">
                <p className='text-xs font-medium '>Make this gift extra special</p>
              </div>
              <div className="flex  gap-3   flex-wrap w-full ">
                {
                  [1, 2, 3, 4].map((item) => (
                    <div className="w-fit border flex flex-col gap-1 hover:border-[#0E4D65] rounded-lg overflow-hidden" key={item}>
                      <div className=" size-16  md:size-20 lg:size-24 ">
                        <img className='w-full h-full object-cover' src="https://imgcdn.floweraura.com/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.jpg?tr=w-118,dpr-1.5,q-70" alt="" />
                      </div>
                      <div className=" px-2 mb-2">
                        <p className='text-xs font-medium oblack'>Basic</p>
                        <p className='text-sm font-medium mblack'>₹ 545</p>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className=" mt-3">
                <p className='text-xs font-medium '>Weight</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="border bg-[#F4F7F8] border-[#0E4D65] px-4 text-[#0E4D65] py-2 rounded-md font-semibold text-xs center">
                    0.5 Kg
                  </div>
                  <div className="border border-[#B8CAD1] px-4 text-[#0E4D65] py-2 rounded-md font-semibold text-xs center">
                    1 Kg
                  </div>
                </div>
              </div>
              <div className="  lg:w-[65%] mt-3">
                <div className=" flex items-center justify-between ">
                  <p className='text-xs font-medium '>Name on Cake</p>
                  <p className='text-xs  opacity-60 font-medium'>0 / 26</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input className=' h-14 w-full text-sm px-5 border-[#B8CAD1] outline-none border rounded-lg ' placeholder='Write Name Here' type="text" name="" id="" />
                </div>
              </div>
              <div className="w-full flex items-center gap-2">
                <div
                  onClick={() => setOpenCityPopup(true)}
                  className=" h-12 cursor-pointer flex items-center justify-start gap-1 px-4 w-[70%] md:w-[50%] lg:w-[30%] border border-[#0E4D65]  mt-3 rounded-lg">
                  <img src="https://imgcdn.floweraura.com/ssr-build/static/media/pin.1de7ed25.svg" alt="" />
                  <p className=' cursor-pointer font-medium text-[#197889] -mt-1 '>  {SelectedCity === "" ? "Enter City" : SelectedCity} </p>
                </div>
                <img id='shake_img' className=' w-[30vw] md:w-[14vw] lg:w-[10vw]' src="/images/check_availability.png" alt="" />
              </div>
              <div className="w-full overflow-hidden text-[#0E4D65] border border-[#197889] rounded-lg mt-3">

                <div
                  className="h-12 px-4 flex items-center justify-between w-full bg-gradient-to-r from-[#CDE7F6] to-[#F0F9FF] cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src="https://imgcdn.floweraura.com/home-page/offer-available.svg"
                      alt="Offers"
                    />
                    <p className="font-medium text-[#0E4D65]">Offers Available</p>
                  </div>
                  <RiArrowDownSLine
                    size={28}
                    color="#0E4D65"
                    className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden px-4 flex flex-col gap-3 bg-white ${isOpen ? 'max-h-[500px] py-4 opacity-[1]' : ' opacity-0 max-h-0 py-0'
                    }`}
                >
                  <div className="h-14 border font-medium text-xs md:text-sm flex items-center justify-between px-4 border-[#B8CAD1] rounded-lg w-full">
                    <div className="flex gap-2 items-center w-full">
                      <img
                        src="https://imgcdn.floweraura.com/coupon_offers/cred_2.png?tr=w-36"
                        alt="CRED"
                      />
                      <p className="text-[#494D4D]">
                        Get assured cashback upto Rs. 200 on CRED UPI
                      </p>
                    </div>
                    <p className="text-[#0E4D65]">T&C*</p>
                  </div>
                  <div className="h-14 border font-medium text-sm flex items-center justify-between px-4 border-[#B8CAD1] rounded-lg w-full">
                    <div className="flex gap-2 items-center w-full">
                      <img
                        src="https://imgcdn.floweraura.com/coupon_offers/paytm_2.png?tr=w-36"
                        alt="Paytm"
                      />
                      <p className="text-[#494D4D]">
                        Assured cashback upto ₹100 using Paytm UPI
                      </p>
                    </div>
                    <p className="text-[#0E4D65]">T&C*</p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-3 border border-[#E7EDEF]  rounded-lg">
                <div className="h-12 text-[#494D4D] border-b border-[#E7EDEF] bg-[#F4F7F8] w-full flex px-4 text-sm font-medium items-center">
                  <p>Product Contains</p>
                </div>
                <div className="p-5 text-sm  text-[#606463] ">
                  <div className='flex items-center gap-2 font-normal'>
                    <p>
                      •
                    </p>
                    <p>
                      Flavour: Chocolate
                    </p>
                  </div>
                  <div className='flex items-center gap-2 font-normal'>
                    <p>
                      •
                    </p>
                    <p>
                      Shape: Round
                    </p>
                  </div>
                  <div className='flex items-center gap-2 font-normal'>
                    <p>
                      •
                    </p>
                    <p>
                      Type: Cream Cake

                    </p>
                  </div>
                  <div className='flex items-center gap-2 font-normal'>
                    <p>
                      •
                    </p>
                    <p>
                      Toppings: Dark Chocolate


                    </p>
                  </div>
                </div>
                <div className="h-12 text-[#494D4D] border-b border-[#E7EDEF] bg-[#F4F7F8] w-full flex px-4 text-sm font-medium items-center">
                  <p>Description</p>
                </div>
                <div className="p-5 text-sm  text-[#606463] ">
                  <p>This round cream cake is full of chocolate sponge and chocolate cream. It's perfect for every celebration like a birthday or anniversary, and everyone can enjoy it as it comes in an eggless only. This is one of the best selling cake and most loved product on FlowerAura.</p>
                </div>
                <div className="h-12 text-[#494D4D] border-b border-[#E7EDEF] bg-[#F4F7F8] w-full flex px-4 text-sm font-medium items-center">
                  <p>Care Instructions</p>
                </div>
                <div className="p-5 text-sm  text-[#606463] ">
                  <div className='flex items-center gap-2 font-normal'>
                    <p>
                      •
                    </p>
                    <p>
                      Cream cakes must be refrigerated.
                    </p>
                  </div>

                </div>
              </div>
              <div className="mt-3 px-5 text-sm">
                <p className='text-[#494D4D] font-medium '>SKU Number
                </p>
                <p className='text-[#606463] mt-1 '>
                  CAK0920170059</p>
              </div>
              <div className="w-full bg-[#F7FAFB] px-10 py-6 rounded-lg  flex items-center justify-evenly">
                <img className=' w-[25%] lg:w-[12%]' src="https://imgcdn.floweraura.com/detail-page/fa-fresh-icon.png" alt="" />
                <img className=' w-[25%] lg:w-[12%]' src="https://imgcdn.floweraura.com/detail-page/fa-quality-icon.png" alt="" />
                <img className=' w-[25%] lg:w-[12%]' src="https://imgcdn.floweraura.com/detail-page/fa-fssai-icon.png" alt="" />
              </div>
              <div className="mt-3 text-sm">
                <p className='text-[#494D4D] font-medium '>Note</p>
              </div>
              <div className="w-full h-12 bg-[#F7FAFB] px-4  rounded-lg  flex items-center text-sm">
                <p>The icing, design of the cake may vary from the image depending upon local availability.</p>              </div>

              {/* Purchase button Purchase button Purchase button  */}
              <div className=" sticky bottom-0 pb-2 bg-white">
                <div className="mt-3 text-sm">
                  <div className=' flex gap-2 items-center text-[#494D4D] font-medium '>
                    <img src="https://imgcdn.floweraura.com/ssr-build/static/media/van.7277c0c5.svg" alt="" />
                    <p>Get today! Order within
                      <span className=' text-[#197889] font-semibold ml-2'>
                        3hr 49min 35sec
                      </span>
                    </p>
                  </div>
                </div>
                <div className=" w-full mt-3  gap-3 h-12 uppercase font-bold    rounded-md  flex items-center justify-evenly md:justify-start text-sm">
                  <button className=' px-4 lg:px-16 whitespace-nowrap uppercase rounded-md border border-[#0E4D65] text-[#0E4D65] h-full '>Go to Cart</button>
                  <button className="buy-now-btn relative overflow-hidden  px-4 lg:px-16 whitespace-nowrap uppercase rounded-md bg-[#0E4D65] text-white h-full">
                    BUY NOW | ₹595
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-b border-[#E7EDEF] mt-3 py-5">
              <p className=' text-xl font-medium  '>Product Reviews</p>
              <div className="flex items-center gap-2 my-2 ">
                <img src="https://imgcdn.floweraura.com/ssr-build/static/media/star.ef4d153d.svg" alt="" />
                <p className=' text-xl font-medium mblack'>4.9</p>
              </div>
              <div className="">
                <CustomerImages images={[
                  "https://imgcdn.floweraura.com/fa/review_image/1744713801_816787.jpeg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/opr_review/1744516560_3180.jpg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/opr_review/1741597138_7124.jpg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/1714103956_895590.jpeg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/opr_review/1742376359_2694.jpg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/1744713801_816787.jpeg?tr=w-75",
                  "https://imgcdn.floweraura.com/fa/review_image/opr_review/1741664219_7413.jpg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/opr_review/1744789259_6698.jpg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/1705845192_374507.jpeg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/opr_review/1745120759_1930.jpg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/1703002473_563621.jpeg?tr=w-220",
                  "https://imgcdn.floweraura.com/fa/review_image/1744713801_816787.jpeg?tr=w-75",
                ]} />

              </div>
            </div>
            <div className="">
              <CustomerShortReview allReviews={reviews} />
            </div>

          </div>
        </div>
        <div className="Similar_section">
          <div className="w-full">
            <div className="w-full py-5 flex items-center justify-between ">
              <div className="h-full flex justify-center flex-col  md:gap-2">
                <p className=' text-xl md:text-3xl font-semibold mblack'>Similar Products</p>
              </div>
            </div>
            <div className="w-full pb-16 scroller-x flex overflow-x-scroll gap-2 md:gap-7  ">
              {
                [1, 2, 3, 4, 5].map((item, i) => (
                  <SimilarProductCard key={i} />
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