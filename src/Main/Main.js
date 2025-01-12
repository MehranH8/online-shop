import Account from "../components/Account/Account"
import Checkout from "../components/Checkout/Checkout"
import Home from "../components/Home/Home"
import Likedproduct from "../components/Likedproduct/Likedproduct"
import Bottomnavbar from "../components/Navbar/Bottomnavbar/Bottomnavbar"
import Middlenavbar from "../components/Navbar/Middlenavbar/Middlenavbar"
import Topnavbar from "../components/Navbar/Topnavbar/Topnavbar"
import Footer from "../Ui/Footer/Footer"
import { Route, Routes } from "react-router-dom";
import Digital from "../components/Products/Digital/Digital"
import Digitaldetail from "../components/Products/Digital/Digitaldetail/Digitaldetail"
import Fashion from "../components/Products/Fashion/Fashion"
import Fashiondetail from "../components/Products/Fashion/Fashiondetail/Fashiondetail"
import Makeup from "../components/Products/Makeup/Makeup"
import Makeupdetail from "../components/Products/Makeup/Makeupdetail/Makeupdetail"
import Furniture from "../components/Products/Furniture/Furniture"
import Furnituredetail from "../components/Products/Furniture/Furnituredetail/Furnituredetail"
import Homeelectric from "../components/Products/Homeelectric/Homeelectric"
import Homeelectricdetail from "../components/Products/Homeelectric/Homeelectricdetail/Homeelectricdetail"


const Main = () => {
    return (
        <div className="">
            <Topnavbar />
            <Middlenavbar />
            <Bottomnavbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/liked" element={<Likedproduct/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/product/digital" element={<Digital/>}/>
                <Route path="/product/fashion" element={<Fashion/>}/>
                <Route path="/product/makeup" element={<Makeup/>}/>
                <Route path="/product/furniture" element={<Furniture/>}/>
                <Route path="/product/appliance" element={<Homeelectric/>}/>
                <Route path="/product/appliance/detail/:id" element={<Homeelectricdetail/>}/>
                <Route path="/product/furniture/detail/:id" element={<Furnituredetail/>}/>
                <Route path="/product/fashion/detail/:id" element={<Fashiondetail/>}/>
                <Route path="/product/makeup/detail/:id" element={<Makeupdetail/>}/>
                <Route path="/product/digital/detail/:id" element={<Digitaldetail />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default Main