import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cleansers" element={<Cleansers />}></Route>
        <Route path="/dryfruits" element={<DryFruits />}></Route>
        <Route path="/faceprime" element={<FacePrime />}></Route>
        <Route path="/productseyes" element={<ProductsEyes />}></Route>
        <Route path="/productsdetails" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/thankyou" element={<ThankYou />}></Route>
      </Routes>
    </div>
  );
};
