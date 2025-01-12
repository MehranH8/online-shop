import {
    Navbar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Card,
    Typography,
} from "@material-tailwind/react";
import { TbPhoneCall } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";



function NavList() {
    const [openMenudigital, setopenMenudigital] = React.useState(false);
    const [openMenuclothes, setopenMenuclothes] = React.useState(false);
    const [openMenumakeup, setopenMenumakeup] = React.useState(false);
    const [openMenuhome, setopenMenuhome] = React.useState(false);
    const [openMenuelectric, setopenMenuelectric] = React.useState(false);

    const menudigitalitems = [
        {
            title: "موبایل",
        },
        {
            title: "هندزفری و هدفون",
        },
        {
            title: "کنسول بازی",
        },
        {
            title: "ساعت هوشمند",
        },
        {
            title: "لپ تاپ",
        },
        {
            title: "تبلت",
        },

        {
            title: "پرینتر",
        },
        {
            title: "کامپیوتر",
        },
        {
            title: "دوربین",
        },
        {
            title: "پاوربانک",
        },
    ];

    const menuclothesitems = [
        {
            title: "لباس مردانه",
        },
        {
            title: "لباس زنانه",
        },
        {
            title: "لباس بچگانه",
        },
        {
            title: "کفش مردانه",
        },
        {
            title: "کفش بچگانه",
        },
        {
            title: "کفش زنانه",
        },

        {
            title: "لباس ورزشی",
        },
        {
            title: "کیف و اکسسوری",
        },
        {
            title: "کت و کاپشن",
        },
        {
            title: "لباس خواب",
        },
    ];

    const menucmakeupitems = [
        {
            title: "مراقبت مو",
        },
        {
            title: "مراقبت پوست",
        },
        {
            title: "عطر و ادکلن",
        },
        {
            title: "لوازم بهداشتی",
        },
        {
            title: "لوازم برقی",
        },
    ];
    const menuchomeitems = [
        {
            title: "ظروف پخت و پز",
        },
        {
            title: "لوازم آشپزی",
        },
        {
            title: "دکوراسیون",
        },
        {
            title: "لوازم بهداشتی",
        },
        {
            title: "شستوشو و نظافت",
        },
        {
            title: "شستوشو و نظافت",
        },
        {
            title: "ظروف آشپزخانه",
        },
    ];
    const menucelectricitems = [
        {
            title: "صوتی تصویری",
        },
        {
            title: "یخچال فریزر",
        },
        {
            title: "جارو برقی",
        },
        {
            title: "ماشین لباسشویی",
        },
        {
            title: "ماشین ظرفشویی",
        },
        {
            title: "سرمایش و گرمایش",
        },
        {
            title: "تصفیه آب",
        },
        {
            title: "اتو",
        },
    ];


    return (
        <ul className="my-2 hidden md:flex gap-4 lg:mb-0 lg:mt-0 md:flex-row md:items-center lg:gap-6 ">
            <li >
                <Menu  className="" open={openMenudigital} handler={setopenMenudigital} allowHover>
                    <MenuHandler >
                        <div
                            className={`flex cursor-pointer items-center gap-3 text-base font-normal capitalize hover:text-mainorange transition-colors duration-200 tracking-normal text-[14px] lg:text-[16px]  ${openMenudigital ? " text-mainorange" : ""
                                }`}
                        >
                            <Link to="/product/digital">
                                لوازم دیجیتال
                            </Link>
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${openMenudigital ? "rotate-180 text-mainorange transition-colors duration-200 " : ""
                                    }`}
                            />
                        </div>
                    </MenuHandler>
                    <MenuList  className="lg:w-[60%] xl:w-[55%] 2xl:w-[40%]">
                        <ul className=" grid grid-cols-4 w-full gap-x-4 gap-y-3 ">
                            {menudigitalitems.map(({ title, description }) => (
                                <Link to="/product/digital">

                                    <MenuItem  style={{ direction: "rtl" }} className="hover:text-mainorange border-r-[1px] border-mainorange rounded-r-none transition-colors duration-200 text-black">
                                        <li className="mb-1 w-full min-w-fit">
                                            {title}
                                        </li>
                                    </MenuItem>
                                </Link>

                            ))}
                        </ul>
                    </MenuList>
                </Menu>
            </li>
            <li >
                <Menu  open={openMenuclothes} handler={setopenMenuclothes} allowHover>
                    <MenuHandler >
                        <div
                            className={`flex cursor-pointer items-center gap-3 text-base font-normal capitalize hover:text-mainorange transition-colors duration-200 tracking-normal text-[14px] lg:text-[16px]  ${openMenuclothes ? " text-mainorange" : ""
                                }`}
                        >
                            <Link to="/product/fashion">
                                مد و پوشاک
                            </Link>
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${openMenuclothes ? "rotate-180 text-mainorange transition-colors duration-200" : ""
                                    }`}
                            />
                        </div>
                    </MenuHandler>
                    <MenuList  className="lg:w-[60%] xl:w-[55%] 2xl:w-[40%]">
                        <ul className=" grid grid-cols-4 w-full gap-x-4 gap-y-3">
                            {menuclothesitems.map(({ title, description }) => (
                                <Link to="/product/fashion">

                                    <MenuItem  style={{ direction: "rtl" }} className="hover:text-mainorange border-r-[1px] border-mainorange rounded-r-none transition-colors duration-200 text-black">
                                        <li className="mb-1 w-full min-w-fit">
                                            {title}
                                        </li>
                                    </MenuItem>
                                </Link>

                            ))}
                        </ul>
                    </MenuList>
                </Menu>
            </li>
            <li >
                <Menu  open={openMenumakeup} handler={setopenMenumakeup} allowHover>
                    <MenuHandler >
                        <div
                            className={`flex cursor-pointer items-center gap-3 text-base font-normal capitalize hover:text-mainorange transition-colors duration-200 tracking-normal text-[14px] lg:text-[16px] ${openMenumakeup ? " text-mainorange" : ""
                                }`}
                        >
                            <Link to="/product/makeup">
                                آرایشی و بهداشتی
                            </Link>
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${openMenumakeup ? "rotate-180 text-mainorange transition-colors duration-200" : ""
                                    }`}
                            />
                        </div>
                    </MenuHandler>
                    <MenuList  className="lg:w-[60%] xl:w-[55%] 2xl:w-[40%]">
                        <ul className=" grid grid-cols-4 w-full gap-x-4 gap-y-3">
                            {menucmakeupitems.map(({ title, description }) => (
                                <Link to="/product/makeup">

                                    <MenuItem  style={{ direction: "rtl" }} className="hover:text-mainorange border-r-[1px] border-mainorange rounded-r-none transition-colors duration-200 text-black">
                                        <li className="mb-1 w-full min-w-fit">
                                            {title}
                                        </li>

                                    </MenuItem>
                                </Link>

                            ))}
                        </ul>
                    </MenuList>
                </Menu>
            </li>
            <li >
                <Menu  open={openMenuhome} handler={setopenMenuhome} allowHover>
                    <MenuHandler >
                        <div
                            className={`flex cursor-pointer items-center gap-3 text-base font-normal capitalize hover:text-mainorange transition-colors duration-200 tracking-normal text-[14px] lg:text-[16px] ${openMenuhome ? " text-mainorange" : ""
                                }`}
                        >
                            <Link to="/product/furniture">
                                خانه و آشپزخانه
                            </Link>
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${openMenuhome ? "rotate-180 text-mainorange transition-colors duration-200" : ""
                                    }`}
                            />
                        </div>
                    </MenuHandler>
                    <MenuList  className="lg:w-[60%] xl:w-[55%] 2xl:w-[40%]">
                        <ul className=" grid grid-cols-4 w-full gap-x-4 gap-y-3">
                            {menuchomeitems.map(({ title, description }) => (
                                <Link to="/product/furniture">
                                    <MenuItem  style={{ direction: "rtl" }} className="hover:text-mainorange border-r-[1px] border-mainorange rounded-r-none transition-colors duration-200 text-black">
                                        <li className="mb-1 w-full min-w-fit">
                                            {title}
                                        </li>
                                    </MenuItem>
                                </Link>
                            ))}
                        </ul>
                    </MenuList>
                </Menu>
            </li>
            <li >
                <Menu  open={openMenuelectric} handler={setopenMenuelectric} allowHover>
                    <MenuHandler >
                        <div
                            className={`flex cursor-pointer items-center gap-3 text-base font-normal capitalize hover:text-mainorange transition-colors duration-200 tracking-normal text-[14px] lg:text-[16px] ${openMenuelectric ? " text-mainorange" : ""
                                }`}
                        >
                            <Link to="/product/appliance">
                                لوازم خانگی
                            </Link>
                            <FaAngleDown
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${openMenuelectric ? "rotate-180 text-mainorange transition-colors duration-200" : ""
                                    }`}
                            />
                        </div>
                    </MenuHandler>
                    <MenuList  className="lg:w-[60%] xl:w-[55%] 2xl:w-[40%]">
                        <ul className=" grid grid-cols-4 w-full gap-x-4 gap-y-3">
                            {menucelectricitems.map(({ title, description }) => (
                                <Link to="/product/appliance">

                                    <MenuItem  style={{ direction: "rtl" }} className="hover:text-mainorange border-r-[1px] border-mainorange rounded-r-none transition-colors duration-200 text-black">
                                        <li  className="mb-1 w-full min-w-fit">
                                            {title}
                                        </li>

                                    </MenuItem>
                                </Link>

                            ))}
                        </ul>
                    </MenuList>
                </Menu>
            </li>
        </ul>
    );
}
const Bottomnavbar = () => {
    return (
        <Navbar className="mx-auto max-w-none shadow-none px-6 py-3">
            <div className="flex items-center justify-center xl:justify-between text-black mx-8 lg:mx-14">
                <div className="mr-0 lg:mr-4">
                    <NavList />
                </div>
                <div className="mr-4 hidden xl:flex gap-x-3 py-1.5">
                    <div className="flex gap-x-2">
                        <span className="text-[24px]"><TbPhoneCall /> </span>
                        <span className="font-bold">شماره تماس: </span>
                    </div>
                    <div className="text-mainorange">
                        <span className="mt-[1px]">09133336333</span>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}


export default Bottomnavbar