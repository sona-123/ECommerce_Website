import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Navbar1 from "../components/Navbar1";

const Home2 = () => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar1 />
     <Slider />
      <Categories />
      {/* <Products/> */}
      {/* <Newsletter/> */}
      <Footer/>
    </div>
  );
};

export default Home2;
