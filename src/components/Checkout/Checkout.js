
import { useState,useEffect } from "react";
import Checkoutcard from "../../Ui/Checkoutcard/Checkoutcard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Checkout = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const [checkoutcard, setcheckoutcard] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/22f4b68af315201ed4e8bf1e56e6f7ac7c56e0a8_1712995524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بی سیم سنهایزر مدل MOMENTUM True Wireless 4", "12,500,000", "/"],
            ["https://dkstatics-public.digikala.com/digikala-products/22f4b68af315201ed4e8bf1e56e6f7ac7c56e0a8_1712995524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بی سیم سنهایزر مدل MOMENTUM True Wireless 4", "12,500,000", "/"],
            ["https://dkstatics-public.digikala.com/digikala-products/22f4b68af315201ed4e8bf1e56e6f7ac7c56e0a8_1712995524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بی سیم سنهایزر مدل MOMENTUM True Wireless 4", "12,500,000", "/"],
        ]
    })


    return (
        <div data-aos="fade-up"
        data-aos-duration="800" data-aos-delay="300" data-aos-once="true" className="mt-10">
            {/*title */}
            <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 border-b-[1px] border-[#e0e0e2] -pb-1  mb-12">
                <h2 className="border-b-[3px] pb-2 border-mainblue text-mainblue max-w-fit px-4">سبد خرید </h2>
            </div>
            {/*title */}
            <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 flex lg:flex-row flex-col gap-x-12">
                {/*products */}
                <div className="w-full">
                    {checkoutcard.data.map((item) => (
                        <Checkoutcard img={item[0]} title={item[1]} price={item[2]} link={item[3]} />
                    ))}
                </div>
                {/*products */}
                {/*sidebar */}
                <div className="lg:sticky h-fit lg:top-12 max-w-[550px] mx-auto lg:mx-0 mb-16 lg:mb-0 lg:w-[45%] xl:w-[35%]">
                    <div className="border-[1px] rounded-xl py-8 px-5 border-[#e0e0e2]">
                        <div className="text-[14px] text-[#62666d] flex justify-between mb-6">
                            <span>
                                قیمت کالاها
                            </span>
                            <span>
                                15,250,000
                            </span>
                        </div>
                        <div className="text-[14px] flex justify-between mb-6 text-mainorange">
                            <span>
                                جمع سبد خرید
                            </span>
                            <span>
                                15,250,000
                            </span>
                        </div>
                        <div>
                            <button className="bg-[#519BC2] hover:bg-opacity-80 transition-all duration-300 text-white px-2 py-3 w-full rounded-lg text-[14px] sm:text-[16px]" type="button">تایید و تکمیل سفارش</button>
                        </div>
                    </div>
                    <div className="mt-3 mx-1">
                        <p className="text-[12px] text-[#81858d]">هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند</p>
                    </div>
                </div>
                {/*sidebar */}
            </div>
        </div>
    )
}


export default Checkout