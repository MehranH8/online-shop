import Productdetail from "../../../../Ui/Productdetail/Productdetail"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Digitaldetail = () => {

    const [products, setproducts] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/d024f38ee22e13ede4d4381f9535b8b7274f37bf_1732557876.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "تلویزیون ال ای دی هوشمند جی پلاس مدل GTV-50MH512N سایز 50 اینچ 2023", "25,000,000","/product/digital/detail/1","لوارم دیجیتال","تلویزیون"],
            ["https://dkstatics-public.digikala.com/digikala-products/0d15fdd05c6ff5c3dbc99f0e503e08e8e1c023b3_1703511951.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "کنسول بازی سونی مدل PlayStation 5 Slim ظرفیت یک ترابایت", "35,000,000","/product/digital/detail/2","لوارم دیجیتال","کنسول بازی"],
            ["https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت", "40,000,000","/product/digital/detail/3","لوارم دیجیتال","موبایل"],
            ["https://dkstatics-public.digikala.com/digikala-products/41d43012149f70c0f9bc1f3d9619b6746cc29674_1712666789.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRH8-i7 13620H 16GB 512SSD", "28,000,000","/product/digital/detail/4","لوارم دیجیتال","لپ تاپ"],
            ["https://dkstatics-public.digikala.com/digikala-products/7bfbd14d217ad1aa3d10368f5adc6e5df4493354_1689424808.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "کامپیوتر همه کاره 24 اینچی مایا مدل MA24D 12M-i5 12400-8GB DDR5-500GB SSD-IPS", "18,000,000","product/digital/detail/5","لوارم دیجیتال","کلمپیوتر"],
            ["https://dkstatics-public.digikala.com/digikala-products/ad3e7e7e3dc9af884f98a0acf895f12433092aa5_1714374023.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "تبلت 12.4 اینچ سامسونگ مدل Galaxy Tab S9 FE Plus 5G SM-X616B", "50,000,00","/product/digital/detail/6","لوارم دیجیتال","تبلت"],
            ["https://dkstatics-public.digikala.com/digikala-products/c23b49b0be1c4ae5b2a3d7a3281d2f1731065243_1726037574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "گوشی موبایل سامسونگ مدل Galaxy S24 Ultra دو سیم کارت", "45,000,000","/product/digital/detail/7","لوارم دیجیتال","گوشی"],
            ["https://dkstatics-public.digikala.com/digikala-products/ab332a7fab7a921d8f1d36ae9417e4b09bbb8845_1601636795.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "پرینتر چندکاره لیزری اچ پی مدل Laser MFP 135w", "17,000,000","/product/digital/detail/8","لوارم دیجیتال","پرینتر"],
            ["https://dkstatics-public.digikala.com/digikala-products/ee779bf4d405620d47f753a7452fb9d56aa417db_1717523687.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "لپ تاپ 16 اینچی ایسوس  2TB SSD-RTX4080-QHD 240Hz", "32,000,000","/product/digital/detail/9","لوارم دیجیتال","لپ تاپ"],
            ["https://dkstatics-public.digikala.com/digikala-products/113332499.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "دوربین دیجیتال کانن مدل EOS 250D به همراه لنز 55-18 میلی متر IS STM", "8,900,000","/product/digital/detail/10","لوارم دیجیتال","دوربین"],
            ["https://dkstatics-public.digikala.com/digikala-products/14ea1ba929165f4c63e0956111b3e0139d9938da_1721150582.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "ساعت هوشمند سامسونگ مدل Galaxy Watch 7 44mm", "7,500,000","/product/digital/detail/11","لوارم دیجیتال","ساعت هوشمند"],
            ["https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت", "40,000,000","/product/digital/detail/12","لوارم دیجیتال","موبایل"],
            ["https://dkstatics-public.digikala.com/digikala-products/3dbad9f94e8174f2faef6525499da934507b130f_1687860325.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "هدفون بلوتوثی هایلو مدل X1 2023", "750,000","/product/digital/detail/13","لوارم دیجیتال","هدفون"],
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


export default Digitaldetail