import React, { useEffect, useState } from "react";
import { HeaderWrapper } from "./styles/HeaderWrapper";
import { DownloadButton } from "./styles/DownloadButton";
import Parallax from "parallax-js";
import Image1 from "../image/logo.png";
import Image2 from "../image/Logo 01[94] 1.png";
import About from "../components/About/Index";
import Images3D from "./Images3D/Images3D";
import Chefs from "./Chefs/Chefs";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";
import Pricing from "../components/Pricing/index";
function Header() {
  const [navbar, setNavbar] = useState(false);

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState();

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      console.log("Scroll is more than 66");
      setNavbar(true);
    } else {
      setNavbar(false);
      console.log("Scroll is less than 66");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <HeaderWrapper variant={navbar}>
        <div id="hero">
          <div id="hero_content">
            <div className="heading-h1">Tikalah</div>
            <div className="heading-h1">is an AR Garnish for your menu</div>
            <DownloadButton>Download</DownloadButton>
          </div>
          {/*         <div className="scene">
          <img src="https://jarit.app/images/jarit/header-image1.png" />
        </div> */}
        </div>
        <header>
          <nav id="navbar">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#About">About us</a>
              </li>
              <li>
                <a href="#Images3D">3D Models</a>
              </li>
              <li>
                <a href="#Chefs">Our Chefs</a>
              </li>
              <div className="Logo">
                {navbar == true ? (
                  <img src={Image1} className="Img" height="40rem" />
                ) : (
                  <img src={Image2} className="Img" height="60rem" />
                )}
                {/*               <img
                src={Image1}
                className="Img"
                height={navbar == true ? "40rem" : "60rem"}
              /> */}
              </div>
              <li>
                <a href="#Services">Service</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>

              <li>
                <a href="#Blog">Blog</a>
              </li>

              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </nav>
        </header>
      </HeaderWrapper>
      <section id="About">
        <About />
      </section>
      <section id="Images3D">
        <Images3D />
      </section>
      <section id="Chefs">
        <Chefs />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Pricing">
        <Pricing />
      </section>
      <section id="Blog">
        <Blog />
      </section>
    </>
  );
}

export default Header;
