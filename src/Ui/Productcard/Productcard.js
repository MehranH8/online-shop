import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";


const Productcard = (props) => {
    return (
        <Link to={props.link}>
            <div key={props.keys} className="border-[2px] border-[#e2e2e2] border-dashed rounded-xl py-6 px-8">
                <div>
                    <img className="mx-auto" src={props.img} alt="product-img" />
                </div>
                <div className="mb-3 text-[14px]">
                    <h5 className="text-darkgrey">
                        {props.title}
                    </h5>
                </div>
                <div className="flex justify-between text-maingreen mb-3 text-[14px]">
                    <span>
                        قیمت:
                    </span>
                    <span>
                        {props.price}
                    </span>
                </div>
                <div className="flex justify-center">
                    <button className="flex gap-x-2 hover:bg-opacity-80 transition-all duration-200 bg-[#519BC2] text-white rounded-md px-2 py-1 text-[14px]" type="button"> <span className="my-auto text-[18px]"><CiSquarePlus /></span>افزودن به سبد خرید</button>
                </div>
            </div>
        </Link>
    )
}
export default Productcard