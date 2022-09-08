import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home/home"
import { SignIn } from "../Components/SignIn/SignIn"
import { Login } from '../Components/SignIn/Login';
import { Cleansers } from '../Components/ProductPages/Cleansers';
import { DryFruits } from '../Components/ProductPages/DryFruits';
import { FacePrime } from '../Components/ProductPages/FacePrime';
import { ProductsEyes } from '../Components/ProductPages/ProductsEyes';
import { ProductDetails } from '../Components/productDetails/ProductDetails';
import { Checkout } from '../Components/Checkout/CheckOut'
import { ThankYou } from '../Components/ThankYou/ThankYou'


export const AllRoutes = () =>{
    return(
        <div>
            <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cleansers" element={<Cleansers/>}></Route>
        <Route path="/dryfruits" element={<DryFruits />}></Route>
        <Route path="/faceprime" element={<FacePrime />}></Route>
        <Route path="/productseyes" element={<ProductsEyes />}></Route>
        <Route path="/productsdetails" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/thankyou" element={<ThankYou/>}></Route>
      </Routes>
        </div>
    )
}