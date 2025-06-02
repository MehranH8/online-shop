import { Link } from "react-router-dom"
   import React from 'react';
   import Lottie from 'react-lottie';
   import animationData from './Animation.json'; 

const Page404 = () => {
   const defaultOptions = {
     loop: true,
     autoplay: true,
     animationData: animationData,
     rendererSettings: {
       preserveAspectRatio: 'xMidYMid slice'
     }
   };

    return (
        <main class="grid pb-52  min-h-full place-items-center -mt-16 bg-white px-6 py-24 lg:py-36 lg:px-8">
            <div class="text-center">
                  <Lottie options={defaultOptions} />
                <h1 class="text-[16px] sm:text-[18px] md:text-[22px] font-semibold tracking-tight text-balance text-gray-900 ">صفحه مورد نظر پیدا نشد</h1>
                <p class="mt-6 text-[14px] md:text-[16px] font-medium text-pretty text-gray-500 ">متاسفانه صفحه مورد نظر شما پیدا نشد</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" class="text-[12px] sm:text-[14px] flex gap-x-2 border-mainorange border-2 hover:bg-white hover:text-black transition-all duration-300 bg-mainorange text-white rounded-md px-3 sm:px-5 py-1.5">برگشت به خانه</Link>
                </div>
            </div>
        </main>
    )
}

export default Page404