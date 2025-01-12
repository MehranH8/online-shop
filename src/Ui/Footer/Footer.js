import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg"


const Footer =()=>{
    return(
        <div className="border-y-[1px] mt-28 border-dashed border-mainorange mb-1 flex flex-col md:flex-row justify-center px-8 sm:px-10 gap-y-10 lg:px-28 py-20 gap-x-16 lg:gap-x-32">
        <div>
            <h5 className="text-[15px] font-bold mb-3 text-center">لینک های مهم</h5>
            <ul className="flex flex-col gap-y-2 text-center">
                <Link to="/account">
                    <li className="text-[14px] text-darkgrey hover:text-mainorange transition-colors duration-200">حساب کاربری</li>
                </Link>
                <Link to="/checkout">
                    <li className="text-[14px] text-darkgrey hover:text-mainorange transition-colors duration-200">سبد خرید</li>
                </Link>
                <Link to="#">
                    <li className="text-[14px] text-darkgrey hover:text-mainorange transition-colors duration-200">قوانین و مقررات</li>
                </Link>
                <Link to="#">
                    <li className="text-[14px] text-darkgrey hover:text-mainorange transition-colors duration-200">حفظ حریم شخصی</li>
                </Link>
            </ul>
        </div>
        <div>
            <h5 className="text-[15px] font-bold mb-3 text-center">دسترسی سریع</h5>
            <ul className="flex flex-col gap-y-2 text-center">
                <Link to="/account">
                    <li className="text-[14px] text-darkgrey hover:text-mainorange transition-colors duration-200">حساب کاربری</li>
                </Link>
                <Link to="/checkout">
                    <li className="text-[14px] text-darkgrey hover:text-mainorange transition-colors duration-200">سبد خرید</li>
                </Link>
                <Link to="#">
                    <li className="text-[14px] text-darkgrey hover:text-mainorange transition-colors duration-200">قوانین و مقررات</li>
                </Link>
                <Link to="#">
                    <li className="text-[14px] text-darkgrey hover:text-mainorange transition-colors duration-200">حفظ حریم شخصی</li>
                </Link>
            </ul>
        </div>
        <div className="md:max-w-[35%] text-center sm:text-start">
            <div className="flex gap-x-2 mb-3 justify-center sm:justify-start">
                <span>
                    <img className="max-w-[30px]" src={logo} alt="logo" />
                </span>
                <h5 className="my-auto text-mainorange font-bold text-[15px]">فروشگاه خریدتو</h5>
            </div>
            <div className="mb-4 ">
                <p className="text-darkgrey text-[14px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
            </div>
            <div className="flex flex-col gap-y-2 sm:flex-row justify-self-center sm:justify-self-start gap-x-4 sm:justify-between ">
                <div className="flex gap-x-2">
                    <span className="mt-1"><LuPhoneCall /></span>
                    <h5 className="text-[15px]">شماره تماس</h5>
                </div>
                <div>
                    <span className="text-mainorange text-[15px]">09133336333</span>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Footer