import React from "react";
import first from "../../../img/logo.jpg"
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Input,
    Badge,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Drawer,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { FaRegSquareCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Middlenavbar = () => {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <div>
            {/*drawer */}
            <Drawer className="overflow-auto" placement="right" open={openRight} onClose={closeDrawerRight}>
                <div className="mb-2  flex items-center justify-between p-4">
                    <Link to="/">
                        <div className=" flex gap-x-2">
                            <img className="w-12 h-12" src={first} alt="logo" />
                            <h1 className="text-mainorange text-[16px] font-bold my-auto">خریدتو</h1>
                        </div>
                    </Link>
                    <IconButton variant="text" onClick={closeDrawerRight}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className="relative sm:hidden mx-4 mb-4">
                    <input
                        className="w-full  rounded text-sm border border-slate-200 pr-3 pl-28 xl:pl-36 py-3 "
                        placeholder="جستوجو ..."
                    />
                    <button
                        className="absolute h-full top-0 left-0 flex items-center text-center rounded bg-mainblue px-3 text-white  "
                        type="button"
                    >
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ">
                                <path  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"  />
                            </svg>
                        </div>
                    </button>
                </div>
                <List className="">
                    <Accordion
                        open={open === 1}
                        icon={
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0 p-3 group hover:bg-white hover:text-mainorange transition-colors duration-200 ${open === 1 ? "bg-white text-mainorange" : ""}`}>
                                <Typography className={`ml-auto text-black group-hover:text-mainorange transition-colors duration-200 font-normal ${open === 1 ? "bg-white text-mainorange" : ""}`}>
                                    لوازم دیجیتال
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        موبایل
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        هندزفری و هدفون
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        کنسول بازی
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        ساعت هوشمند
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لپ تاپ
                                    </ListItem>
                                </Link>
                                <Link to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        تبلت
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        پرینتر
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        کامپیوتر
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        دوربین
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/digital">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        پاوربانک
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0 p-3 group hover:bg-white hover:text-mainorange transition-colors duration-200 ${open === 2 ? "bg-white text-mainorange" : ""}`}>
                                <Typography className={`ml-auto text-black group-hover:text-mainorange transition-colors duration-200 font-normal ${open === 2 ? "bg-white text-mainorange" : ""}`}>
                                    مد و پوشاک
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لباس مردانه
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لباس زنانه
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لباس بچگانه
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        کفش مردانه
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        کفش بچگانه
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        کفش زنانه
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لباس ورزشی
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        کیف و اکسسوری
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        کت و کاپشن
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/fashion">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لباس خواب
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 3}
                        icon={
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)} className={`border-b-0 p-3 group hover:bg-white hover:text-mainorange transition-colors duration-200 ${open === 3 ? "bg-white text-mainorange" : ""}`}>
                                <Typography className={`ml-auto text-black group-hover:text-mainorange transition-colors duration-200 font-normal ${open === 3 ? "bg-white text-mainorange" : ""}`}>
                                    آرایشی و بهداشتی
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link onClick={closeDrawerRight} to="/product/makeup">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        مراقبت مو
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/makeup">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        مراقبت پوست
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/makeup">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        عطر و ادکلن
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/makeup">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لوازم بهداشتی
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/makeup">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لوازم برقی
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 4}
                        icon={
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 4}>
                            <AccordionHeader onClick={() => handleOpen(4)} className={`border-b-0 p-3 group hover:bg-white hover:text-mainorange transition-colors duration-200 ${open === 4 ? "bg-white text-mainorange" : ""}`}>
                                <Typography className={`ml-auto text-black group-hover:text-mainorange transition-colors duration-200 font-normal ${open === 4 ? "bg-white text-mainorange" : ""}`}>
                                    خانه و آشپزخانه
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link onClick={closeDrawerRight} to="/product/furniture">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        ظروف پخت و پز
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/furniture">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لوازم آشپزی
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/furniture">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        دکوراسیون
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/furniture">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        لوازم بهداشتی
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/furniture">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        شستوشو و نظافت
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/furniture">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        ظروف آشپرخانه
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 5}
                        icon={
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 5 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 5}>
                            <AccordionHeader onClick={() => handleOpen(5)} className={`border-b-0 p-3 group hover:bg-white hover:text-mainorange transition-colors duration-200 ${open === 5 ? "bg-white text-mainorange" : ""}`}>
                                <Typography className={`ml-auto text-black group-hover:text-mainorange transition-colors duration-200 font-normal ${open === 5 ? "bg-white text-mainorange" : ""}`}>
                                    لوازم خانگی
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link onClick={closeDrawerRight} to="/product/appliance">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        صوتی تصویری
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/appliance">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        یخچال فریزر
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/appliance">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        جارو برقی
                                    </ ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/appliance">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        ماشین لباسشویی
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/appliance">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        ماشین ظرفشویی
                                    </ ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/appliance">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        سرمایش و گرمایش
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/appliance">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        تصفیه آب
                                    </ListItem>
                                </Link>
                                <Link onClick={closeDrawerRight} to="/product/appliance">
                                    <ListItem className="hover:text-mainorange text-[14px]">
                                        اتو
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>
                </List>
            </Drawer>
            {/*drawer */}
            <Navbar className=" w-full max-w-none rounded-none shadow-none px-4 py-2 lg:px-8 lg:py-4">
                <div className=" flex items-center justify-between md:mx-8 lg:mx-14">
                    <div className="mr-0 lg:mr-4  py-1.5 justify-between md:justify-start w-full md:w-fit flex flex-row-reverse md:flex-row gap-x-10">
                        <Link to="/">
                            <div className=" flex gap-x-2">
                                <img className="w-12 h-12" src={first} alt="logo" />
                                <h1 className="text-mainorange text-[16px] font-bold my-auto">خریدتو</h1>
                            </div>
                        </Link>
                        <div className="flex gap-x-8">
                            {/*drawer */}
                            <div className="flex md:hidden text-black text-[32px] ">
                                <button className="self-center" onClick={openDrawerRight}>
                                    <IoMenu />
                                </button>
                            </div>
                            {/*drawer */}
                            <div className="sm:block relative hidden">
                                <input
                                    className="w-full  rounded text-sm border border-slate-200 pr-3 pl-28 xl:pl-36 py-3 "
                                    placeholder="جستوجو ..."
                                />
                                <button
                                    className="absolute h-[95%] top-0 left-0 flex items-center text-center rounded bg-mainblue px-3 text-white  "
                                    type="button"
                                >
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ">
                                            <path  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"  />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-12">
                        <div className="hidden xl:flex gap-x-12">
                            <div className="flex gap-x-3">
                                <div className="text-mainorange text-[36px] my-auto"><FaRegSquareCheck /></div>
                                <div className="text-black">
                                    <p className="text-[14px]">ضمانت اصالت کالا</p>
                                    <span className="text-[12px] text-[#000000] text-opacity-25">100% تضمین اصالت</span>
                                </div>
                            </div>
                            <div className="flex gap-x-3">
                                <div className="text-mainorange text-[36px] my-auto"><BsTruck /></div>
                                <div className="text-black">
                                    <p className="text-[14px]">ارسال رایگان</p>
                                    <span className="text-[12px] text-[#000000] text-opacity-25">تمامی خرید ها</span>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex gap-x-6">
                            <div className="text-black text-[24px] hover:text-mainorange transition-colors duration-200">
                                <span>
                                    <Link to="/checkout">
                                        <Badge className="text-[#f7763d]">
                                            <BsCart3 />
                                        </Badge>
                                    </Link>
                                </span>
                            </div>
                            <div className="text-black text-[24px] hover:text-mainorange transition-colors duration-200">
                                <span>
                                    <Link to="/liked">
                                        <Badge className="text-[#f7763d]">
                                            <FaRegHeart />
                                        </Badge>
                                    </Link>
                                </span>
                            </div>
                            <div className="text-black text-[24px] hover:text-mainorange transition-colors duration-200">
                                <span>
                                    <Link to="/account">
                                        <MdOutlineAccountCircle />
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div >
    )
}


export default Middlenavbar