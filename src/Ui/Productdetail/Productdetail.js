import React from "react";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import Productcard from "../Productcard/Productcard";
import Comments from "../Comments/Comments";


const Productdetail = (props) => {

    const data = [
        {
            imgelink: props.img2
        },
        {
            imgelink: props.img3
        },
        {
            imgelink: props.img4
        },
        {
            imgelink: props.img5
        },
        {
            imgelink: props.img6
        },
    ];

    const [active, setActive] = React.useState(
        props.img1,
    );


    const [relatedproducts, setrelatedproducts] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000"],
        ]
    })
    const [comments, setcomments] = useState({
        data: [
            ["علی رضایی", "11 روز پیش", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آن چنان که لازم است", 5],
            ["علی رضایی", "11 روز پیش", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آن چنان که لازم است", 5],
            ["علی رضایی", "11 روز پیش", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آن چنان که لازم است", 5],
            ["علی رضایی", "11 روز پیش", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آن چنان که لازم است", 5],
        ]
    })


    return (
        <div className="mt-10">
            <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 flex xl:flex-row flex-col gap-x-12">
                {/*images */}
                <div className="grid gap-4 xl:sticky xl:top-8 h-fit min-w-[50%] xl:w-[50%] mb-20 xl:mb-0">
                    <div>
                        <img
                            className="h-auto w-full max-w-[800px] rounded-lg object-cover object-center md:h-[480px]"
                            src={active}
                            alt="product-img"
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        {data.map(({ imgelink }, index) => (
                            <div key={index}>
                                <img
                                    onClick={() => setActive(imgelink)}
                                    src={imgelink}
                                    className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                    alt="produvt-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/*images */}
                <div className="w-full">
                    <div>
                        <span className="text-[#519bc2] text-[14px]">{props.category}</span>
                        <span className="text-[#c0c2c5] mx-2">/</span>
                        <span className="text-[#519bc2] text-[14px]">{props.product}</span>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-[18px]">
                            {props.title}
                        </h2>
                    </div>
                    <div className="flex mt-3">
                        <span className="text-yellow-500 my-auto text-[14px] mt-1"><FaStar /></span>
                        <div className="my-auto">
                            <span className=" text-[12px] ml-1 mr-2">4.3</span>
                            <span className="text-[#c0c2c5] text-[12px]">(امتیاز 57 خریدار)</span>
                        </div>
                    </div>
                    <div className=" border-b-[1px] border-[#e0e0e2] -pb-1 mt-8 mb-12">
                        <h2 className="border-b-[3px] pb-2 border-mainblue text-mainblue max-w-fit px-4">مشخصات </h2>
                    </div>
                    <div>
                        <div className="flex gap-x-5 sm:gap-x-12 mb-6 border-b-[1px] border-[#e0e0e2] pb-0">
                            <span className="text-[#81858b] text-[14px] border-b-[1px] border-mainorange pb-4 min-w-[90px] sm:min-w-[120px]">
                                نوع
                            </span>
                            <p className=" w-full text-[14px]">
                                کالا اصل با گارانتی
                            </p>
                        </div>
                        <div className="flex gap-x-5 sm:gap-x-12 mb-6 border-b-[1px] border-[#e0e0e2] pb-0">
                            <span className="text-[#81858b] text-[14px] border-b-[1px] border-mainorange pb-4 min-w-[90px] sm:min-w-[120px]">
                                وزن
                            </span>
                            <p className=" w-full text-[14px]">
                                1.8 کیلوگرم
                            </p>
                        </div>
                        <div className="flex gap-x-5 sm:gap-x-12 mb-6 border-b-[1px] border-[#e0e0e2] pb-0">
                            <span className="text-[#81858b] text-[14px] border-b-[1px] border-mainorange pb-4 min-w-[90px] sm:min-w-[120px]">
                                ابعاد
                            </span>
                            <p className=" w-full text-[14px]">
                                ۳۵۹.۷x۲۳۲.۵ میلی‌متر
                            </p>
                        </div>
                        <div className="flex gap-x-5 sm:gap-x-12 mb-6 border-b-[1px] border-[#e0e0e2] pb-0">
                            <span className="text-[#81858b] text-[14px] border-b-[1px] border-mainorange pb-4 min-w-[90px] sm:min-w-[120px]">
                                پردازنده
                            </span>
                            <p className=" w-full text-[14px]">
                                intel
                            </p>
                        </div>
                        <div className="flex gap-x-5 sm:gap-x-12 mb-6 border-b-[1px] border-[#e0e0e2] pb-0">
                            <span className="text-[#81858b] text-[14px] border-b-[1px] border-mainorange pb-4 min-w-[90px] sm:min-w-[120px]">
                                سری پردازنده
                            </span>
                            <p className=" w-full text-[14px]">
                                core i5
                            </p>
                        </div>
                        <div className="flex gap-x-5 sm:gap-x-12 mb-6 border-b-[1px] border-[#e0e0e2] pb-0">
                            <span className="text-[#81858b] text-[14px] border-b-[1px] border-mainorange pb-4 min-w-[90px] sm:min-w-[120px]">
                                ظرفیت RAM
                            </span>
                            <p className=" w-full text-[14px]">
                                12 گیگابایت
                            </p>
                        </div>
                        <div className="flex gap-x-5 sm:gap-x-12 mb-6 border-b-[1px] border-[#e0e0e2] pb-0">
                            <span className="text-[#81858b] border-b-[1px] border-mainorange pb-4  text-[14px] min-w-[90px] sm:min-w-[120px]">
                                توضیحات باتری
                            </span>
                            <p className=" w-full text-[14px]">
                                سه سلولی با ظرفیت ۴۲ وات ساعت
                            </p>
                        </div>
                    </div>
                    <div className=" border-b-[1px] border-[#e0e0e2] -pb-1 mt-16 mb-12">
                        <h2 className="border-b-[3px] pb-2 border-mainblue text-mainblue max-w-fit px-4">نظرات کاربران</h2>
                    </div>
                    {comments.data.map((item) => (
                        <Comments name={item[0]} date={item[1]} describ={item[2]} rate={item[3]} />
                    ))}
                </div>
            </div>
            <div className="mx-4 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 mt-20">
                <div className="flex justify-between mb-10">
                    <div>
                        <h4 className="text-[14px] sm:text-[18px] font-bold">محصولات مرتبط</h4>
                    </div>
                </div>
                <div className="grid grid-cols-1 mx-4 sm:mx-0 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {relatedproducts.data.map((item) => (
                        <Productcard img={item[0]} title={item[1]} price={item[2]} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Productdetail