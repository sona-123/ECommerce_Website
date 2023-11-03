import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

import Slider from "../components/Slider";
import Navbar1 from "../components/Navbar1";

const Home2 = () => {
  return (
    <div>
     
      <Navbar1 />
     <Slider />
      <Categories />
  
      <Footer/>
    </div>
  );
};

export default Home2;
