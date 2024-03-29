import React from "react";
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Sell from "./pages/Sell";
import Contact from "./pages/Contact";
import DSLR from "./pages/DSLR";
import SingleProduct from "./pages/SingleProduct";
import ModelDescription from "./pages/ModelDescription";
import "./pages/Sell.scss";
import { Route, Routes } from 'react-router-dom';
import ProductDetails from "./pages/ProductDetails";
import CustomizedSteppers from "../src/assets/progressbar/progressBar";
import Lens from "./assets/formsteps/lens";
import Accessories from "./assets/formsteps/accessories";
import CameraAge from "./assets/formsteps/cameraAge";
import Quotation from "./assets/formsteps/quotation";
import Hero from "./components/hero/Hero";
import DamageQuatation from "../src/assets/formsteps/damageQuatation";
import SignIn from "./components/Authentication/signin";
import Modal from "./components/modal/homeModal";
import ActionCamera from "./pages/ActionCamera";
import VideoCamera from "./pages/VideoCamera";
import InstagramFeed from "./pages/Instagram";
import { useState, useEffect } from 'react';
import Preloader from "./pages/preloader";
import LoginModal from "./components/Authentication/loginmodal";



function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (

    <div>
    {isLoading ? (
      <Preloader />
    ) : (
      /* Render your app content when not loading */
      <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/DSLR" element={<DSLR />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/ModelDescription" element={<ModelDescription />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/CustomizedSteppers" element={<CustomizedSteppers />} />
        <Route path="/lens" element={<Lens />}></Route>
        <Route path="accessories" element={<Accessories />} />
        <Route path="/cameraAge" element={<CameraAge />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/damageQuatation" element={<DamageQuatation />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/modal" element={<Modal />}  />
        <Route path="/action-camera" element={<ActionCamera/>} />
        <Route path="/video-camera" element={<VideoCamera/>} />
        <Route path="/instagramfeed" element={<InstagramFeed />} />
        <Route path="/login" element={<LoginModal />}/>
       
        

      </Routes>
      <Footer />
    </div>
    )}
  </div>

    
  )
};
export default App;
