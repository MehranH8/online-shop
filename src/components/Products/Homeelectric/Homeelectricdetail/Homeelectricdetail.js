import Productdetail from "../../../../Ui/Productdetail/Productdetail"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Homeelectricdetail = () => {

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


export default Homeelectricdetail