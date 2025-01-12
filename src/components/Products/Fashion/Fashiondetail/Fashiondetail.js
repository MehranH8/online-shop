import Productdetail from "../../../../Ui/Productdetail/Productdetail"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Fashiondetail = () => {

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

    const productid = useLocation().pathname

    const choosenindex = products.data.findIndex((id) => {
        if (id[3] == productid) {
            return products
            
        }
    })

    return (
        <div>
                <Productdetail category={products.data[choosenindex][4]} product={products.data[choosenindex][5]} title={products.data[choosenindex][1]} img1={products.data[choosenindex][0]}img2={products.data[choosenindex][0]}img3={products.data[choosenindex][0]}img4={products.data[choosenindex][0]}img5={products.data[choosenindex][0]}img6={products.data[choosenindex][0]} />
        </div>
    )
}


export default Fashiondetail