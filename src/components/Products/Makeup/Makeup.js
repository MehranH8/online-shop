import Productcard from "../../../Ui/Productcard/Productcard"
import { useState } from "react"


const Makeup =()=>{


    const [products, setproducts] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/f14d1e72fe6270f282fcc200bdcf64f1b9b68f68_1603024791.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "اتو مو کیمی مدل KM-329", "2,000,000","/product/makeup/detail/1","آرایشی و بهداشتی","لوازم برقی"],
            ["https://dkstatics-public.digikala.com/digikala-products/349d1600adb74cdf81d68011e929b7b94f72555f_1731713582.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "حالت دهنده مو مرویل مدل 3505", "500,000","/product/makeup/detail/2","آرایشی و بهداشتی","لوازم آرایش"],
            ["https://dkstatics-public.digikala.com/digikala-products/39901ad9048c63f4d8dea2281f71838db51676d6_1672056911.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "مسواک بنسر مدل PREMIER CLEAN با برس متوسط", "300,000","/product/makeup/detail/3","آرایشی و بهداشتی","مسواک"],
            ["https://dkstatics-public.digikala.com/digikala-products/112436632.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "مسواک جی یو ام مدل Classic 411 با برس نرم", "750,000","/product/makeup/detail/4","آرایشی و بهداشتی","مسواک"],
            ["https://dkstatics-public.digikala.com/digikala-products/e56ad6647691130bea30b866ed4b1ab9da59b1f5_1610216363.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "مداد چشم کالیستا بیوتی شماره 01", "800,000","/product/makeup/detail/5","آرایشی و بهداشتی","لوازم آرایش"],
            ["https://dkstatics-public.digikala.com/digikala-products/6f9919f2ed2bcc7cdb9ee9842f45231f88757faf_1713255251.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "محلول تقویت کننده مژه سریتا مدل Eyelash special حجم 8 میلی لیتر", "1,200,000","/product/makeup/detail/6","آرایشی و بهداشتی","لوازم آرایش"],
            ["https://dkstatics-public.digikala.com/digikala-products/790ca89d74a77a8ced2e5040a1514e821a5d1ddb_1693167513.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "برس ابرو و مژه مدل 01 مجموعه 10 عددی", "850,000","/product/makeup/detail/7","آرایشی و بهداشتی","لوازم آرایش"],
            ["https://dkstatics-public.digikala.com/digikala-products/82dc424115b3e0a2150bddfb4f449b00d9a309f2_1699794323.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "پالت سایه چشم هلد مورنینگ مدل گلیتر", "940,000","/product/makeup/detail/8","آرایشی و بهداشتی","لوازم آرایش"],
            ["https://dkstatics-public.digikala.com/digikala-products/eb59b86eb5013725389b1c3720af96964c38940a_1711787957.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "مژه مصنوعی دوو مدل ریلی 12 مجموعه 4 عددی", "550,000","/product/makeup/detail/9","آرایشی و بهداشتی","لوازم آرایش"],
            ["https://dkstatics-public.digikala.com/digikala-products/92bdbf47f5776b4191fdddea2f3c3a4208ce9578_1664950217.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "شامپو تقویت کننده مو دیترون مدل کافئین حجم 200 میلی لیتر", "800,000","/product/makeup/detail/10","آرایشی و بهداشتی","شامپو"],
            ["https://dkstatics-public.digikala.com/digikala-products/f7b08d887930c7b2e45a6553189b1645b7f47e4c_1724505451.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "شامپو ضد ریزش مو کاندید مدل Des Chevaux حجم 200 میلی لیتر", "400,000","/product/makeup/detail/11","آرایشی و بهداشتی","شامپو"],
            ["https://dkstatics-public.digikala.com/digikala-products/112143093.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "شامپو ژیوانا مدل Ginseng حجم 500 میلی لیتر", "300,000","/product/makeup/detail/12","آرایشی و بهداشتی","شامپو"],
            ["https://dkstatics-public.digikala.com/digikala-products/f7c2107e7ca6f4860b02b36ef182dff011c1b872_1731189241.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "سشوار حرفه ای مرویل مدل AC275", "1,750,000","/product/makeup/detail/13","آرایشی و بهداشتی","لوازم برقی"],
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


export default Makeup