import Productcard from "../../../Ui/Productcard/Productcard"
import { useState } from "react"


const Homeelectric =()=>{


    const [products, setproducts] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/0e8a52a2c4abd6b645012b37f5f49fa5371f6851_1709637916.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "سرخ‌کن بدون روغن سوناشی، ظرفیت 10 لیتری", "8,000,000","/product/appliance/detail/1","لوازم خانگی","ظروف آشپزخانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/eb7a7b86778f9e9f8d1e3c4f696710de1799d185_1609960208.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "ماشین لباسشویی ایکس ویژن مدل TG72-BW/BS ظرفیت 7 کیلوگرم", "16,500,000","/product/appliance/detail/2","لوازم خانگی","ماشین لباسشویی"],
            ["https://dkstatics-public.digikala.com/digikala-products/8e36026514ced616ec245d9707cbc5f6e38c2ffb_1710592261.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "مخلوط کن سوناشی مدل SB-184", "4,000,000","/product/appliance/detail/3","لوازم خانگی","مبلمان"],
            ["https://dkstatics-public.digikala.com/digikala-products/eb7a7b86778f9e9f8d1e3c4f696710de1799d185_1609960208.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "ماشین لباسشویی ایکس ویژن مدل TG72-BW/BS ظرفیت 7 کیلوگرم", "11,750,000","/product/appliance/detail/4","لوازم خانگی","ماشین لباسشویی"],
            ["https://dkstatics-public.digikala.com/digikala-products/cdef7cbb590d41ff92863e34950f166e11c72452_1671891822.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "ماشین لباسشویی فریدولین مدل SWT90 ظرفیت 9 کیلوگرم", "26,000,000","/product/appliance/detail/5","لوازم خانگی","ماشین لباسشویی"],
            ["https://dkstatics-public.digikala.com/digikala-products/f93d28a0985676724c696f5616a7bc2face3dc65_1691511220.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "یخچال و فریزر 40 فوت استیلون مدل SPRING - 14402", "19,200,000","/product/appliance/detail/6","لوازم خانگی","یخچال"],
            ["https://dkstatics-public.digikala.com/digikala-products/7d51a19c20931ac7538da25e2bf9fa620d8fb7f7_1682852965.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "یخچال و فریزر ساید بای ساید 30 فوت ایکس ویژن مدل TS666-AWD/ASD", "16,850,000","/product/appliance/detail/7","لوازم خانگی","یخچال"],
            ["https://dkstatics-public.digikala.com/digikala-products/9783a85f7ce6dac1be5ca991932ca6d3f3465e41_1688373166.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "اجاق گاز صفحه ای اخوان مدل Z5", "2,400,000","/product/appliance/detail/8","لوازم خانگی","اجاق گاز"],
            ["https://dkstatics-public.digikala.com/digikala-products/ae38b63d985857bb61de40a2654187a877f9ae60_1678692980.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "هود مخفی اخوان مدل H-206 سایز 70", "4,550,000","/product/appliance/detail/9","لوازم خانگی","هود"],
            ["https://dkstatics-public.digikala.com/digikala-products/4983419.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "فیلتر ذغالی هود مدل الوند", "3,800,000","/product/appliance/detail/10","لوازم خانگی","هود"],
            ["https://dkstatics-public.digikala.com/digikala-products/23739176c9f5127e1aa8f3d82a8edce8952c4cdb_1681496983.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "تمپر قهوه مدل فنری 51", "400,000","/product/appliance/detail/11","لوازم خانگی","قهوه ساز"],
            ["https://dkstatics-public.digikala.com/digikala-products/2b1f0348d635e5d12bcd1e168e48877bbc50da6e_1659865245.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "ناک باکس و تمپر و تمپر مت و پورتا کیپر مدل 51", "300,000","/product/appliance/detail/12","لوازم خانگی","قهوه ساز"],
            ["https://dkstatics-public.digikala.com/digikala-products/2f804db88cfbe4365b53efdf3efef2f0746c847b_1673707334.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "نیدل و فانل گتر مدل لینا کد 51", "750,000","/product/appliance/detail/13","لوازم خانگی","قهوه ساز"],
        ]
    })
    const [filter, setfilter] = useState(0)



    return(
        <div className="mt-10">
            <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-12 xl:mx-14 2xl:mx-20">
                {/*filter */}
                <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-6 mb-8 pb-4 mr-1 border-b-[1px] border-[#e0e0e2]">
                    <button onClick={() => setfilter(0)} className={filter == 0 ? "text-mainorange transition-colors duration-200 text-[14px] sm:text-[16px]" : "text-black transition-colors duration-200 text-[14px] sm:text-[16px]"} type="button">پربازدیدترین</button>
                    <button onClick={() => setfilter(1)} className={filter == 1 ? "text-mainorange transition-colors duration-200 text-[14px] sm:text-[16px]" : "text-black transition-colors duration-200 text-[14px] sm:text-[16px]"} type="button">پرفروش ترین</button>
                    <button onClick={() => setfilter(2)} className={filter == 2 ? "text-mainorange transition-colors duration-200 text-[14px] sm:text-[16px]" : "text-black transition-colors duration-200 text-[14px] sm:text-[16px]"} type="button">جدیدترین</button>
                    <button onClick={() => setfilter(3)} className={filter == 3 ? "text-mainorange transition-colors duration-200 text-[14px] sm:text-[16px]" : "text-black transition-colors duration-200 text-[14px] sm:text-[16px]"} type="button">منتخب ترین</button>
                </div>
                {/*filter */}
                {/*products */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.data.map((item) => (
                        <Productcard img={item[0]} title={item[1]} price={item[2]} link={item[3]}/>
                    ))}
                </div>
                {/*products */}
            </div>
        </div>
    )
}


export default Homeelectric