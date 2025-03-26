import React, { useState } from "react";
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./components/Com/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Com/Footer";
import NotFoundPage from "./components/Com/NotFoundPage";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import PricingPlans from "./pages/PricingPlans";
import About from "./pages/About";
import ContactUsForm from "./components/ContactForm";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import MyOrders from "./components/Profile/MyOrders";
import ProfileDetails from "./components/Profile/ProfileDetails";
import ManageAddresses from "./components/Profile/ManageAddresses";
import CheckOut from "./pages/CheckOut";
import LoginRegister from "./components/Auth/LoginRegister";
import SearchProdcut from "./pages/SearchProdcut";
import OrderSuccessPage from "./pages/OrderSecsses";
const App = () => {
  const [isModalOpen, setisModuleOpen] = useState(false);
  const PrivateRoutes = () => {
    const User = localStorage.getItem("authToken") !== null;
    return User ? <Outlet /> : <Navigate to="/" />;
  };
  return (
    <Router>
      <Navbar setisModuleOpen={setisModuleOpen} isModalOpen={isModalOpen} />
      {isModalOpen && <LoginRegister setisModuleOpen={setisModuleOpen} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/services/:ServiceType" element={<ServiceDetail />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUsForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search/:search" element={<SearchProdcut />} />

        <Route path="/ordersucces" element={<OrderSuccessPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile/myorders" element={<MyOrders />} />
            <Route path="/profile/info" element={<ProfileDetails />} />
            <Route
              path="/profile/manageAddress"
              element={<ManageAddresses />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
};

export default App;
