import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import "./Home.css"
import headphone from "../../img/headphone.png"
import iphone from "../../img/iphone.png"
import tv from "../../img/tv.png"
import smartwatch from "../../img/smartwatch.webp"
import perfume from "../../img/perfume.png"
import shoe from "../../img/shoe.png"
import xbox from "../../img/xbox.png"
import logo from "../../img/logo.jpg"
import electric from "../../img/home-electric.png"
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { FaChevronLeft } from "react-icons/fa";
import Footer from "../../Ui/Footer/Footer";
import Productcard from "../../Ui/Productcard/Productcard";
import Productcardorange from "../../Ui/Productcardorange/Productcardorange";




const Home = () => {

    const [Newproduct, setNewproduct] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","6"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","7"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","8"],
        ]
    })
    const [Homeproduct, setHomeproduct] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","1"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","2"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","3"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","4"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","5"],
        ]
    })
    const [Productorange, setProductorange] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000"],
        ]
    })

    return (
        <div className="mt-10">
            {/*title */}
            <div className="title-banner mx-8 sm:mx-12 md:mx-24 xl:mx-36 rounded-2xl flex flex-col lg:flex-row justify-between px-6 md:px-24 xl:px-32 py-8 mb-16">
                <div className="mb-12 lg:my-auto mx-auto lg:mx-0 text-center lg:text-start max-w-[80%] lg:max-w-[45%] xl:max-w-[35%]">
                    <h2 className="text-[14px] -mx-4 sm:text-[16px] font-bold mb-3">
                        بهترین و جدیدترین لوازم دیجیتال
                    </h2>
                    <p className="mb-6 text-justify text-[14px] -mx-4 md:text-center lg:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                    </p>
                    <button className="bg-mainblue rounded-3xl mx-auto text-[14px] lg:mx-0 hover:bg-opacity-80 transition-all duration-200 text-white py-1.5 px-2 flex gap-x-2 my-auto" type="button">
                        <Link to="/product/digital">
                            خرید کنید
                        </Link>
                        <span className="bg-white text-mainblue rounded-full p-1"><FaAngleLeft /></span></button>
                </div>
                <div className="relative mx-auto lg:mx-0 max-w-max">
                    <img className="rounded-3xl mx-auto lg:mx-0 w-[300px]" src="https://dkstatics-public.digikala.com/digikala-static/9ddf369d3f7a9ba0d0a4fc2a6dc87bb2523f4ed7_1703923761.jpg" alt="banner" />
                    <span className="bg-mainorange absolute -right-3 sm:-right-6 -top-3 lg:-top-1 rounded-full text-white px-1.5 py-2.5 text-[16px] sm:px-2 sm:py-3 sm:text-[18px]"> %75</span>
                </div>
            </div>
            {/*title */}
            {/*category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-4 lg:grid-cols-3 gap-x-4 xl:gap-x-8 mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 mb-20">
                <Link to="/product/digital">
                    <div className="flex justify-between group bg-[#5124C40A] border-[2px] border-[#5124C40A] hover:border-mainblue transition-colors duration-200 rounded-xl px-4 sm:px-8 gap-x-2 md:px-4 lg:px-8 py-6 sm:py-3">
                        <div className="flex gap-x-5">
                            <img className="max-h-[70px] hidden sm:block" src={headphone} alt="product-img" />
                            <h4 className="text-[14px] sm:text-[16px] my-auto">هندفری و هدفون</h4>
                        </div>
                        <div className="my-auto">
                            <button className="bg-mainblue rounded-3xl group-hover:bg-opacity-70 transition-all duration-200 text-[20px] text-white py-2 px-2 flex gap-x-2 my-auto" type="button"><FaAngleLeft /></button>
                        </div>
                    </div>
                </Link>
                <Link to="/product/digital">
                    <div className="flex justify-between group bg-[#E0F5FF4F] border-[2px] border-[#E0F5FF4F] hover:border-[#519BC2] transition-colors duration-200 rounded-xl px-4 sm:px-8 gap-x-2 md:px-4 lg:px-8 py-6 sm:py-3">
                        <div className="flex gap-x-5">
                            <img className="max-h-[70px] hidden sm:block" src={iphone} alt="product-img" />
                            <h4 className="text-[14px] sm:text-[16px] my-auto">موبایل و لوازم جانبی</h4>
                        </div>
                        <div className="my-auto">
                            <button className="bg-[#519BC2] rounded-3xl group-hover:bg-opacity-70 transition-all duration-200 text-[20px] text-white py-2 px-2 flex gap-x-2 my-auto" type="button"><FaAngleLeft /></button>
                        </div>
                    </div>
                </Link>
                <Link to="/product/digital" className="md:col-span-2 md:w-[50%] lg:w-full lg:mx-0 lg:col-span-1 md:mx-auto" >
                    <div className="flex  justify-between group border-dashed hover:border-solid transition-all duration-200 border-[2px] border-mainorange bg-[#F7763D21] rounded-xl px-4 sm:px-8 gap-x-2 md:px-4 lg:px-8 py-6 sm:py-3">
                        <div className="flex gap-x-5">
                            <img className="max-h-[70px] hidden sm:block" src={smartwatch} alt="product-img" />
                            <h4 className="text-[14px] sm:text-[16px] my-auto">ساعت هوشمند</h4>
                        </div>
                        <div className="my-auto">
                            <button className="bg-mainorange rounded-3xl group-hover:bg-opacity-70 transition-all duration-200 text-[20px] text-white py-2 px-2 flex gap-x-2 my-auto" type="button"><FaAngleLeft /></button>
                        </div>
                    </div>
                </Link>
            </div>
            {/*category */}
            {/*new products */}
            <div className="mx-4 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20">
                <div className="flex justify-between mb-10">
                    <div>
                        <h4 className="text-[14px] sm:text-[18px] font-bold">جدیدترین محصولات</h4>
                    </div>
                    <div>
                        <button className="text-[14px] sm:text-[16px] text-mainorange" type="button">
                            <Link to="/product/digital">
                                مشاهده همه
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 mx-4 sm:mx-0 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {Newproduct.data.map((item) => (
                        <Productcard keys={item[3]} img={item[0]} title={item[1]} price={item[2]} />
                    ))}
                    <Productcardorange img={Productorange.data[0][0]} title={Productorange.data[0][1]} price={Productorange.data[0][2]} />

                </div>
            </div>
            {/*new products */}
            {/*most sale products */}
            <div className="flex relative z-0 overflow-hidden justify-between mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 clothes-banner rounded-xl px-6 py-8 mb-20">
                <div className="flex flex-col gap-y-6 items-center sm:items-start sm:flex-row justify-between xl:justify-start w-full gap-x-4">
                    <div className="my-auto">
                        <h4 className="text-[16px] text-center sm:text-start sm:text-[18px] text-white">
                            پر فروش ترین لباس های فصل
                        </h4>
                    </div>
                    <div>
                        <button className="bg-white rounded-3xl border-[2px] border-white hover:border-mainorange transition-all  md:text-[14px] duration-200 text-mainorange py-1.5 px-2 flex gap-x-2 my-auto" type="button">
                            <Link className="flex gap-x-2" to="/product/fashion">
                                مشاهده محصولات  <span className="bg-mainorange text-white rounded-full p-1"><FaAngleLeft /></span>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="hidden xl:block w-[20%]">
                </div>
            </div>
            {/*most sale products */}
            {/*category cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 mb-20 mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20">
                <div className="bg-[#FF9AB3] pb-8 px-8 rounded-2xl">
                    <div className="text-white text-[18px] lg:text-[16px] xl:text-[18px] mt-10 ">
                        <h5 className="mb-3">انواع ادکلن های مردانه و زنانه</h5>
                        <button className="bg-[#E77291] hover:bg-[#FF9AB3] border-[2px] border-[#FF9AB3] hover:border-[#E77291] rounded-3xl  transition-all duration-200 text-white py-1.5 px-2 flex gap-x-2 my-auto text-[14px]" type="button">
                            <Link to="/product/fashion">
                                خرید کنید
                            </Link>
                            <span className="bg-white text-[#E77291] rounded-full p-1"><FaAngleLeft /></span></button>
                    </div>
                    <div className="relative bottom-0 mt-12">
                        <img className="max-w-[200px] w-full mx-auto" src={perfume} alt="product-img" />
                    </div>
                </div>
                <div className="bg-[#648958] pb-8 px-8 rounded-2xl">
                    <div className="text-white text-[18px] lg:text-[16px] xl:text-[18px] mt-10 ">
                        <h5 className="mb-3">تمام محصولات صوتی تصویری</h5>
                        <button className="bg-[#88BD88] hover:bg-[#648958] border-[2px] border-[#648958] hover:border-[#88BD88] rounded-3xl  transition-all duration-200 text-white py-1.5 px-2 flex gap-x-2 my-auto text-[14px]" type="button">
                            <Link to="/product/digital">
                                خرید کنید
                            </Link>
                            <span className="bg-white text-[#648958] rounded-full p-1"><FaAngleLeft /></span></button>
                    </div>
                    <div className="relative -bottom-[5%] sm:bottom-[-20%]">
                        <img className="max-w-[250px] w-full mx-auto" src={tv} alt="product-img" />
                    </div>
                </div>
                <div className="bg-[#EC8A3C] pb-8 px-8 rounded-2xl">
                    <div className="text-white text-[18px] lg:text-[16px] xl:text-[18px] mt-10 ">
                        <h5 className="mb-3">انواع لباس های مردانه و زنانه</h5>
                        <button className="bg-[#CC6513] hover:bg-[#EC8A3C] border-[2px] border-[#EC8A3C] hover:border-[#CC6513] rounded-3xl  transition-all duration-200 text-white py-1.5 px-2 flex gap-x-2 my-auto text-[14px]" type="button">
                            <Link to="/product/fashion">
                                خرید کنید
                            </Link>
                            <span className="bg-white text-[#EC8A3C] rounded-full p-1"><FaAngleLeft /></span></button>
                    </div>
                    <div className="relative bottom-[-8%] lg:bottom-[-15%]">
                        <img className="max-w-[200px] w-full mx-auto" src={shoe} alt="product-img" />
                    </div>
                </div>
                <div className="bg-[#AF56C6] pb-8 px-8 rounded-2xl">
                    <div className="text-white text-[18px] lg:text-[16px] xl:text-[18px] mt-10 ">
                        <h5 className="mb-3">جدیدترین کنسول های بازی</h5>
                        <button className="bg-[#D086E3] hover:bg-[#AF56C6] border-[2px] border-[#AF56C6] hover:border-[#D086E3] rounded-3xl  transition-all duration-200 text-white py-1.5 px-2 flex gap-x-2 my-auto text-[14px]" type="button">
                            <Link to="/product/digital">
                                خرید کنید
                            </Link>
                            <span className="bg-white text-[#AF56C6] rounded-full p-1"><FaAngleLeft /></span></button>
                    </div>
                    <div className="relative bottom-[-10%] sm:bottom-[-20%]">
                        <img className="max-w-[250px] w-full mx-auto" src={xbox} alt="product-img" />
                    </div>
                </div>
            </div>
            {/*category cards */}
            {/*electric products */}
            <div className="mx-8 justify-self-center sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20 flex flex-col sm:flex-row gap-x-14 mb-32">
                <div className="xl:relative relative sm:sticky top-0 mb-16 sm:mb-auto   sm:top-10 xl:top-0 mx-4 sm:mx-0 lg:mb-auto xl:my-auto max-w-max">
                    <div className="absolute w-full flex flex-col items-center top-14 left-[50%] translate-x-[-50%]">
                        <h4 className="text-[18px] sm:text-[20px] text-white mb-4">لوازم خانگی و برقی</h4>
                        <button className="flex gap-x-2" type="button">
                            <Link to="/product/appliance">
                                مشاهده همه
                            </Link>
                            <span className="my-auto text-[14px]"><FaChevronLeft /></span></button>
                    </div>
                    <img className="rounded-xl max-h-[700px]" src={electric} alt="product-banner" />
                    <div className="bg-[#A7CCFD54] border-[1px] max-h-[600px] border-dashed border-[#A3C9FD] rounded-xl w-full h-full absolute top-0 -z-10 -rotate-6"></div>
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {Homeproduct.data.map((item) => (
                        <Productcard keys={item[3]} img={item[0]} title={item[1]} price={item[2]} />
                    ))}
                    <Productcardorange img={Productorange.data[1][0]} title={Productorange.data[1][1]} price={Productorange.data[1][2]} />
                </div>
            </div>
            {/*electric products */}
        </div>
    )
}


export default Home