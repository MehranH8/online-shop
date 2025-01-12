import Productcard from "../../../Ui/Productcard/Productcard"
import { useState } from "react"


const Fashion =()=>{


    const [products, setproducts] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/117548634.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "هودی مردانه آکو کد M05", "1,000,000","/product/fashion/detail/1","مد و پوشاک","تلویزیون"],
            ["https://dkstatics-public.digikala.com/digikala-products/ecbc515891cab41c8346d90b1500f0db351bc629_1642183134.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "هودی مردانه آریا پارس مدل ستارگان خط", "500,000","/product/fashion/detail/2","مد و پوشاک","لباس مردانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/0455216e3d1dc1dc00e57ff7d0c29ea56d2c6626_1674040990.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "هودی مردانه مدل P59 رنگ طوسی", "800,000","/product/fashion/detail/3","مد و پوشاک","لباس مردانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/20cbf5c61384d080104535a8ecd0f2d74febe8d3_1703587403.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "کاپشن زنانه السانا مدل سارن کد 167901", "750,000","/product/fashion/detail/4","مد و پوشاک","لباس زنانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/741ab4ec4839294e7985fc17c74fc821a5c9f1f7_1700128342.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "کاپشن زنانه اسمارا مدل 13377974", "1,000,000","/product/fashion/detail/5","مد و پوشاک","لباس زنانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/359f16971be113f9dbfb695575930f8e4fcaf1a4_1704363965.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "کاپشن زنانه السانا مدل آیشید کد 136937", "1,200,000","/product/fashion/detail/6","مد و پوشاک","لباس زنانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/f7612749a8ff6d0ced92f614fb80b8a3a8dc951b_1615387915.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "دامن زنانه مدل روبینا", "850,000","/product/fashion/detail/7","مد و پوشاک","لباس زنانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/161a671c86f1aa98f3fa272b8df2b0a01cec9ac5_1700499963.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "پیراهن آستین بلند مردانه مدل dl46", "940,000","/product/fashion/detail/8","مد و پوشاک","لباس مردانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/9b0d2235d88377200c6276e9696d1abe950d644a_1652294065.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "شلوار مردانه صدرا کد B-2024 رنگ سبز", "1,350,000","/product/fashion/detail/9","مد و پوشاک"," لباس مردانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/d0cc39ef3784db7173f18be6ef282e98e2b35d16_1698686319.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "کت چرم مردانه مدل blc soznit", "3,200,000","/product/fashion/detail/10","مد و پوشاک","لباس مردانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/13d95950a1e2801198d349d873d8494bfe6b6259_1713971496.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "کت چرم مردانه مدل 501", "2,500,000","/product/fashion/detail/11","مد و پوشاک","لباس مردانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/8124f65b00fcb0179713cfd9c26938c7815dd7ef_1707294061.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "شلوار مردانه ایزی دو مدل 23478351", "800,000","/product/fashion/detail/12","مد و پوشاک","لباس مردانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/6f503165357ad947129eaf5600e6783d1b564a3f_1673980039.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "شلوار مردانه مدل بنگال کمربند دار", "750,000","/product/fashion/detail/13","مد و پوشاک","لباس مردانه"],
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


export default Fashion