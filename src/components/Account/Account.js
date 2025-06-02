import { CiSquarePlus } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




const Account = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div data-aos="fade-up"
        data-aos-duration="800" data-aos-delay="300" data-aos-once="true" className="mt-10">
            {/*attention */}
            <div className="border-[1px] rounded-xl border-[#e0e0e2] mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 px-8 py-3 mb-8 flex items-center gap-y-2 flex-col lg:flex-row lg:justify-between">
                <div className="my-auto">
                    <p className="text-[14px] text-mainorange text-justify sm:text-start">با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان «خرید اعتباری» نیز استفاده کنید</p>
                </div>
                <div>
                    <button className="text-mainblue text-[14px] flex gap-x-2" type="button"> تایید هویت <span className="my-auto"><FaChevronLeft/></span></button>
                </div>
            </div>
            {/*attention */}
            {/*form */}
            <form className="grid grid-cols-1 sm:grid-cols-2 border-[1px] rounded-xl border-[#e0e0e2] mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 py-6 px-8">
                <div className="flex flex-col gap-y-2 border-b-[1px] sm:border-l-[1px] border-[#f0f0f1] py-4">
                    <label className="text-[#81858b] text-[14px]">
                        نام و نام خانوادگی
                    </label>
                    <input className="focus:border-white focus:outline-0" type="text" value="علی رضایی" />
                </div>
                <div className="flex flex-col gap-y-2 border-b-[1px]  border-[#f0f0f1] py-4 pr-0 sm:pr-8">
                    <label className="text-[#81858b] text-[14px]">
                        کد ملی
                    </label>
                    <input className="focus:border-white focus:outline-0" type="text" value="2225741321" />
                </div>
                <div className="flex flex-col gap-y-2 border-b-[1px] sm:border-l-[1px] border-[#f0f0f1] py-4">
                    <label className="text-[#81858b] text-[14px]">
                        شماره موبایل <span className="text-white bg-[#4caf50] px-2 py-1 text-[12px] rounded-3xl">تایید شده</span>
                    </label>
                    <input className="focus:border-white focus:outline-0" type="text" value="09125462111" />
                </div>
                <div className="flex flex-col gap-y-2 border-b-[1px]  border-[#f0f0f1] py-4 pr-0 sm:pr-8">
                    <label className="text-[#81858b] text-[14px]">
                        ایمیل
                    </label>
                    <input className="focus:border-white focus:outline-0" type="email" value="example@gmail.com" />
                </div>
                <div className="flex flex-col gap-y-2 border-b-[1px] sm:border-l-[1px] border-[#f0f0f1] py-4">
                    <label className="text-[#81858b] text-[14px]">
                        رمز عبور
                    </label>
                    <input className="focus:border-white focus:outline-0" type="password" value="12345" />
                </div>
                <div className="flex flex-col gap-y-2 border-b-[1px]  border-[#f0f0f1] py-4 pr-0 sm:pr-8">
                    <label className="text-[#81858b] text-[14px]">
                        حساب بانکی <span className="text-white bg-[#4caf50] px-2 py-1 text-[12px] rounded-3xl">تایید شده</span>
                    </label>
                    <input className="focus:border-white focus:outline-0" type="text" value="603733777878788" />
                </div>
                <div className="flex flex-col gap-y-2 border-b-[1px] sm:border-l-[1px] border-[#f0f0f1] py-4">
                    <label className="text-[#81858b] text-[14px]">
                        تاریخ تولد
                    </label>
                    <input className="focus:border-white focus:outline-0" type="text" value="15/10/1375" />
                </div>
                <div className="flex flex-col gap-y-2 border-b-[1px]  border-[#f0f0f1] py-4 pr-0 sm:pr-8">
                    <label className="text-[#81858b] text-[14px]">
                        شغل
                    </label>
                    <input className="focus:border-white focus:outline-0" type="text" value="کارمند" />
                </div>
                <div className="flex flex-col gap-y-2 py-4 sm:border-l-[1px] border-[#f0f0f1]">
                    <label className="text-[#81858b] text-[14px]">
                        کد اقتصادی
                    </label>
                    <input className="focus:border-white focus:outline-0" type="text" value="22456687" />
                </div>
                <div className="flex justify-center sm:col-span-2 mt-6">
                    <button className="flex gap-x-2 hover:bg-opacity-80 transition-all duration-200 bg-[#519BC2] text-white rounded-md px-3 py-2 text-[14px]" type="submit"> <span className="my-auto text-[18px]"><CiSquarePlus /></span>ثبت اطلاعات</button>
                </div>
            </form>
            {/*form */}
        </div>
    )
}

export default Account