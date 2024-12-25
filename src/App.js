import React from "react";
import Navbar from "./components/Navbar.js"; // Import Navbar component
import BrandsCarousel from "./components/BrandsCarousel";
import IntroSection from "./components/IntroSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellerProducts from "./components/BestSellerProducts";
import Products from "./components/products";


function App() {
  return (
    <div className="App">
      <Navbar/>     
      <IntroSection/>
      <BestSellerProducts/>
      <Products/>
      <BrandsCarousel/>
    </div>
  );
}

export default App;
