import { CiSquarePlus } from "react-icons/ci";


const Productcardorange = (props) => {
    return (
        <div className="border-[2px] border-mainorange border-dashed rounded-xl py-6 px-8">
            <div>
                <img className="mx-auto" src={props.img} alt="product-img" />
            </div>
            <div className="mb-3">
                <h5 className="text-darkgrey text-[14px]">
                    {props.title}
                </h5>
            </div>
            <div className="flex justify-between text-mainorange mb-3 text-[14px]">
                <span>
                    قیمت:
                </span>
                <span>
                    {props.price}
                </span>
            </div>
            <div className="flex justify-center">
                <button className="flex gap-x-2 hover:bg-opacity-80 transition-all duration-200 bg-mainorange text-white rounded-md px-2 py-1 text-[14px]" type="button"> <span className="my-auto text-[18px]"><CiSquarePlus /></span>افزودن به سبد خرید</button>
            </div>
        </div>
    )
}

export default Productcardorange