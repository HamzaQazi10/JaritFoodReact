import React, { useContext } from "react";
import Header from "../components/Header";
import ParallaxContainer from "../components/ParallaxContainer";
//import About from "../components/About/Index";
import Footer from "../components/Footer";
//import Pricing from "../components/Pricing";

//import { useContext } from "react";
const Home = () => {
  return (
    <>
      <Header />
      <ParallaxContainer />
      {/* <About /> */}
      {/* <Pricing /> */}
      <Footer />
    </>
  );
};

export default Home;
