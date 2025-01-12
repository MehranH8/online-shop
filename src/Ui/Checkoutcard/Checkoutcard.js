import { GoShieldCheck } from "react-icons/go";
import { AiOutlineTruck } from "react-icons/ai";
import { Link } from "react-router-dom";

const Checkoutcard = (props) => {
    return (
        <div className="border-b-[1px] border-[#e0e0e2] pb-16 mb-14 ">
            <div className="flex flex-col sm:flex-row gap-8 ">
                <div className="">
                    <Link to={props.link}>
                    <img className="max-w-[180px] sm:max-w-[120px] mx-auto sm:mx-0 my-auto" src={props.img} alt="product-img" />
                    </Link>
                </div>
                <div className="mx-auto sm:mx-0">
                    <h4 className="text-[14px] sm:text-[16px] mb-4">
                        {props.title}
                    </h4>
                    <p className="text-[#81858d] text-[12px] sm:text-[14px] mb-2 flex gap-x-2">
                        <span className="w-[15px] h-[15px] bg-black rounded-full my-auto"></span>
                        مشکی</p>
                    <p className="text-[#81858d] text-[12px] sm:text-[14px] mb-2 flex gap-x-2">
                        <span className="my-auto text-[16px]"><GoShieldCheck /></span>
                        گارانتی 24 ماهه
                    </p>
                    <p className="text-[#81858d] text-[12px] sm:text-[14px] flex gap-x-2 mb-3">
                        <span className="my-auto text-[18px]"><AiOutlineTruck /></span>
                        ارسال امروز</p>
                    <p className="text-[16px] text-maingreen">
                        <span className="font-bold">{props.price}</span> تومان
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Checkoutcard