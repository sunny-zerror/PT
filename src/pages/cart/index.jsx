import React, { useState } from 'react'

const index = () => {
    const [quantity, setQuantity] = useState(1);

    const price = 685;
    const oldPrice = 1139;
    const discount = oldPrice - price;
    const totalItems = 1;

    function increment() {
        setQuantity((q) => Math.min(q + 1, 99));
    }
    function decrement() {
        setQuantity((q) => Math.max(q - 1, 1));
    }
    function removeItem() {
        setQuantity(0);
    }
    return (
        <div>
            {/* <div className="w-full h-[50vh]  center gap-5 flex-col px-5 md:px-10 xl:px-32">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img className='w-[50%] md:w-fit' src="https://imgcdn.floweraura.com/ssr-build/static/media/newEmptyCart.07e8b5a3.svg" alt="" />
                    <p className='md:text-2xl text-[#0E4D65]  font-bold'>Hey, cart bag seems to be empty, <br /> Let's add some items.</p>
                </div>
                <a href="/">
                    <button
                        type="button"
                        className=" scale-75 md:scale-100 md:mt-6 uppercase font-medium  relative w-fit px-6  rounded-md bg-[#0E4D65] text-white  py-2 md:py-3 shadow-md"
                    >
                        continue shopping
                    </button>
                </a>
            </div> */}
            <div className=" overflow-x-hidden py-10 md:py-0 md:pt-10 flex flex-col md:flex-row gap-10   w-full px-5 md:px-10 xl:px-32 ">
                <section className="flex-1 w-[60%] space-y-6">
                    <div className="border border-blue-200 rounded-lg overflow-hidden bg-[#EBF7FF] ">
                        <header className="flex h-16 px-5  justify-between items-center">
                            <h2 className="font-bold text-[#0E4D65] text-lg md:text-xl">
                                Express Delivery
                            </h2>
                            <button
                                type="button"
                                className="inline-flex items-center gap-1 text-[#197889] font-semibold border border-blue-300 rounded-full px-4 py-1 text-sm md:text-base hover:bg-blue-100 transition"
                            >
                                <img src="https://imgcdn.floweraura.com/ssr-build/static/media/express-icon.66b23d93.svg" alt="" />
                                Same Day
                            </button>
                        </header>

                        {/* Item card */}
                        {quantity > 0 && (
                            <div className="border p-5  bg-white  flex items-center gap-4">
                                <div className="border p-3  h-28 gap-4 border-[#CDDBE0] rounded-lg flex  w-full">
                                    <div className="flex-none size-20  rounded-lg overflow-hidden ">
                                        <img
                                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f86461c0-298a-4ca8-bc6f-b1c3713aee59.png"
                                            alt="Profuse Jade Terrarium product with white round shapes background, plant in a round wooden tray"
                                            className="object-cover w-full h-full"
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src =
                                                    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a59fdbf-96cd-4691-8dc4-b33453e40e92.png";
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate">
                                            Profuse Jade Terrarium
                                        </p>
                                        <div className="mt-1 flex gap-2 items-center text-sm text-gray-500">
                                            <span className="text-gray-900 font-semibold">₹ {price}</span>
                                            <s className="line-through">₹ {oldPrice}</s>
                                        </div>
                                    </div>
                                    <div className=" h-full flex flex-col justify-between items-end ">

                                        <button
                                            onClick={removeItem}
                                            aria-label="Remove item from cart"
                                            className="text-gray-400 hover:text-gray-700 transition flex-none"
                                        >
                                            <img src="https://imgcdn.floweraura.com/ssr-build/static/media/newDeleteIcon.42f8f539.svg" alt="" />
                                        </button>
                                        <div className="ml-4 flex items-center rounded-md text-white bg-[#0E4D65]">
                                            <button
                                                onClick={decrement}
                                                className="w-8 h-8 rounded  font-medium  "
                                                disabled={quantity <= 1}
                                                aria-label="Decrease quantity"
                                            >
                                                -
                                            </button>
                                            <span className="w-6 text-center font-semibold text-white">{quantity}</span>
                                            <button
                                                onClick={increment}
                                                className="w-8 h-8 rounded  font-medium "
                                                aria-label="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )}
                    </div>
                </section>

                {/* Right - Bill Summary */}
                <aside className="w-[40%]  border border-blue-200 rounded-lg bg-white p-6 md:p-8 space-y-6 relative">
                    <div className="w-full center">

                        <div className=" whitespace-nowrap  bg-blue-100 border border-blue-200 text-[#0E4D65] text-xs px-4 py-1 rounded-full font-semibold">
                            You have saved ₹ {discount} on this order
                        </div>
                    </div>

                    <header className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-[#0E4D65] text-lg md:text-xl">
                            Bill Summary
                        </h3>
                        <span className="text-[#0E4D65] text-sm font-medium">{totalItems} Item</span>
                    </header>

                    <div className="border-t border-b border-[#CDDBE0] py-4 space-y-4">
                        <div className="flex justify-between items-center font-medium text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <img src="https://imgcdn.floweraura.com/ssr-build/static/media/itemTotal.9b5a2ca1.svg" alt="" />
                                Order Total
                            </span>
                            <span>
                                <s className="mr-2 text-gray-400">₹ {oldPrice}</s>
                                <span className="font-semibold mblack">₹ {price}</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 text-lg md:text-xl font-semibold text-gray-900">
                        <span className='text-[#0E4D65] font-semibold'>Grand Total</span>
                        <span className='mblack font-semibold'>₹ {price}</span>
                    </div>

                    <button
                        type="button"
                        className="mt-6 buy-now-btn relative w-full rounded-md bg-[#0E4D65] text-white font-bold md:text-lg py-2 md:py-3 shadow-md"
                    >
                        PLACE ORDER
                    </button>
                </aside>
            </div>
        </div>
    )
}

export default index


