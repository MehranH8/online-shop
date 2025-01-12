import Productdetail from "../../../../Ui/Productdetail/Productdetail"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Furnituredetail = () => {

    const [products, setproducts] = useState({
        data: [
            ["https://dkstatics-public.digikala.com/digikala-products/f15ad47472e3bf9ab99c50219558731f208d8449_1710354995.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "سرویس غذاخوری 28 پارچه چینی زرین ایران سری ایتالیا اف مدل Village 2 درجه یک", "8,000,000","/product/furniture/detail/1","خانه و آشپز خانه","ظروف آشپزخانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/dba6818476b7a06c21c1d163eb863259c0b0fb82_1709654018.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "سرویس غذاخوری 26 پارچه گلدن اوپال مدل کارین ساده", "6,500,000","/product/furniture/detail/2","خانه و آشپز خانه","ظروف آشپزخانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/d6feb5bbeb04cc5b7b851eb769e6697bf254c4f3_1692532880.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "مبل راحتی دو نفره مبل ایران استیل مدل چستر CH002", "10,00,000","/product/furniture/detail/3","خانه و آشپز خانه","مبلمان"],
            ["https://dkstatics-public.digikala.com/digikala-products/47ff53cffc8e8eebd2a1904cbfdd9361c0c2ed8b_1713308657.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "مبل راحتی سه نفره مبل ایران استیل مدل پاتریس", "11,750,000","/product/furniture/detail/4","خانه و آشپز خانه","مبلمان"],
            ["https://dkstatics-public.digikala.com/digikala-products/fd9dcbc3cd4ce99eac465bf3e655fb6b06edc2c4_1713353260.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "مبل راحتی هشت نفره مبل ایران استیل مدل هوکو", "26,000,000","/product/furniture/detail/5","خانه و آشپز خانه","مبلمان"],
            ["https://dkstatics-public.digikala.com/digikala-products/3fa808a36eb6bc337f5f863e4d2cafada0dc1816_1596298014.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "سرویس کارد و چنگال 12 پارچه ترامونتینا کد 5589660", "1,200,000","/product/furniture/detail/6","خانه و آشپز خانه","ظروف آشپزخانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/119198495.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "قاشق غذا خوری کد 501 بسته 6 عددی", "850,000","/product/furniture/detail/7","خانه و آشپز خانه","ظروف آشپزخانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/447e57a7b88d14faeef258b2d927846a0f3e1211_1624983414.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "تشک رویال مدل کامفورت یک نفره سایز 200 × 120 سانتی متر", "2,400,000","/product/furniture/detail/8","خانه و آشپز خانه","مبلمان"],
            ["https://dkstatics-public.digikala.com/digikala-products/6e06c0f0c93b1787a459afde29fda3aed13d47d6_1670054016.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "ملحفه خانه سفید مدل آرزو سایز 200x120 سانتی متر", "550,000","/product/furniture/detail/9","خانه و آشپز خانه","مبلمان"],
            ["https://dkstatics-public.digikala.com/digikala-products/90441d59ed5876dc5fe33828dd2c860bdfabffe2_1638966342.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "میز و صندلی ناهارخوری نیکس چوب مدل 3C85", "3,800,000","/product/furniture/detail/10","خانه و آشپز خانه","مبلمان"],
            ["https://dkstatics-public.digikala.com/digikala-products/d8ad323711627d4b611f979257392dc8b88cad8b_1699889332.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "میز ناهارخوری مدل ژاپنی M20 تاشو", "2,400,000","/product/furniture/detail/11","خانه و آشپز خانه","مبلمان"],
            ["https://dkstatics-public.digikala.com/digikala-products/fa878429c8636ebf5de2b63c6dd51d719eb033c0_1621928982.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "چاقو تیزکن وینر کد GG.T01", "300,000","/product/furniture/detail/12","خانه و آشپز خانه","ظروف آشپزخانه"],
            ["https://dkstatics-public.digikala.com/digikala-products/9c4d8e20367304594b5ca0de81c00ff0ee22064b_1731006791.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90", "چاقو آشپزخانه الماس زنجان مدل دم دستی کلاسیک", "1,750,000","/product/furniture/detail/13","خانه و آشپز خانه","ظروف آشپزخانه"],
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


export default Furnituredetail