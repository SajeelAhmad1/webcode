import React from "react";
import Footer from "./Footer";
import Intro from "./Intro";
import Testimonial from "./Testimonial";
import AboutHome from "./AboutHome";
import Cpp from "./CodeExamples/Cpp";
import Header from "./NewHeader";

const Home = () => {
  return (
    <div class="home">
      {/* <div style={{marginTop:'0%'}}><img src='images/bg.png' alt='img'/></div> */}
      <Intro />
      <AboutHome />
      <Cpp />
      <Testimonial />
      <Footer/>
    </div>
  );
};
export default Home;
