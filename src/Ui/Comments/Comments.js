import { Rating } from "@material-tailwind/react";


const Comments = (props) => {
    return (
        <div className="border-b-[2px] border-[#e0e0e2] pb-6 mb-6">
            <div className="text-[12px] text-[#a1a3a8] flex gap-x-6 mb-4">
                <span>{props.name}</span>
                <span>{props.date}</span>
            </div>
            <div className="mb-2">
                <Rating value={props.rate} readonly />
            </div>
            <div className="mb-2">
                <p className="text-[14px] text-justify sm:text-start">
                    {props.describ}
                </p>
            </div>
        </div>
    )
}


export default Comments